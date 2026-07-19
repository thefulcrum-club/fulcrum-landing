import { renderOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "fulcrum. — Strategic Consulting for Founders";

export default async function Image() {
  return renderOgImage({
    eyebrow: "an intelligence layer for founders",
    title: "we are the fulcrum.",
    subtitle:
      "Honest audits, real execution, and a quiet system that keeps watching after we leave.",
  });
}
