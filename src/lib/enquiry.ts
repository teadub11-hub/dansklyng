import { createServerFn } from "@tanstack/react-start";
import { EMAIL } from "@/lib/content";

export type EnquiryInput = {
  company: string;
  name: string;
  email: string;
  country: string;
  type: string;
  interest: string[];
  message: string;
  website: string;
};

const TYPES = new Set(["", "importer", "distributor", "retail", "horeca", "other"]);
const HONEYS = new Set(["lyng", "blomster", "sensommer", "skov"]);

function text(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((raw: EnquiryInput): EnquiryInput => {
    const data: EnquiryInput = {
      company: text(raw?.company, 200),
      name: text(raw?.name, 120),
      email: text(raw?.email, 200).toLowerCase(),
      country: text(raw?.country, 120),
      type: text(raw?.type, 40),
      interest: Array.isArray(raw?.interest)
        ? raw.interest.map((item) => text(item, 40)).filter((item) => HONEYS.has(item)).slice(0, 4)
        : [],
      message: typeof raw?.message === "string" ? raw.message.trim().slice(0, 4000) : "",
      website: text(raw?.website, 200),
    };
    if (!TYPES.has(data.type)) data.type = "";
    if (!data.company || !data.name || !data.email || !data.country) {
      throw new Error("required");
    }
    if (!isEmail(data.email)) throw new Error("email");
    return data;
  })
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };

    const lines = [
      `Company: ${data.company}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Country: ${data.country}`,
      data.type ? `Channel: ${data.type}` : "",
      data.interest.length ? `Honeys: ${data.interest.join(", ")}` : "",
      data.message ? `Message:\n${data.message}` : "",
    ].filter(Boolean);
    const textBody = lines.join("\n");
    const to = process.env.ENQUIRY_TO || EMAIL;
    const key = process.env.RESEND_API_KEY;
    const webhook = process.env.ENQUIRY_WEBHOOK_URL;

    if (key) {
      const from = process.env.ENQUIRY_FROM || "DANSK LYNG <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: data.email,
          subject: `DANSK LYNG — ${data.company}`,
          text: textBody,
        }),
      });
      if (!res.ok) throw new Error("mail");
      return { ok: true as const };
    }

    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: data.company,
          name: data.name,
          email: data.email,
          country: data.country,
          type: data.type,
          interest: data.interest,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error("mail");
    }

    return { ok: true as const };
  });
