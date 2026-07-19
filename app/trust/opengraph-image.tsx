import { renderOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Trust & Privacy — fulcrum.";

export default async function Image() {
  return renderOgImage({
    eyebrow: "trust & privacy",
    title: "A short note on your data.",
    subtitle: "How fulcrum. handles what you share with us.",
  });
}
