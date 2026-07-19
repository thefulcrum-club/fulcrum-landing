import { renderOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "About — fulcrum.";

export default async function Image() {
  return renderOgImage({
    eyebrow: "about",
    title: "A small agency.",
    subtitle: "Founded by Anvit Thakur. Built for the obsessed.",
  });
}
