
import { headers } from "next/headers";

export async function GET() {
  const h = await headers();

  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  const country = h.get("x-vercel-ip-country") ?? "unknown";
  const region = h.get("x-vercel-ip-country-region") ?? "unknown";
  const city = h.get("x-vercel-ip-city") ?? "unknown";
  const ua = h.get("user-agent") ?? "unknown";

  console.log("========== NEW VISITOR ==========");
  console.log("Time    :", new Date().toISOString());
  console.log("IP      :", ip);
  console.log("Country :", country);
  console.log("Region  :", region);
  console.log("City    :", city);
  console.log("UA      :", ua);
  console.log("=================================");

  return Response.json({ok:true});
}
