import { renderOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Work — fulcrum.";

export default async function Image() {
  return renderOgImage({
    eyebrow: "work",
    title: "Still being written.",
    subtitle: "We're early on purpose.",
  });
}
