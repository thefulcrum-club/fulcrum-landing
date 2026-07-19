import { renderOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "The Audit — fulcrum.";

export default async function Image() {
  return renderOgImage({
    eyebrow: "the audit",
    title: "Three days. Eyes wide open.",
    subtitle: "We find the real bottleneck and give you a plain-English plan.",
  });
}
