import { renderOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Manifesto — fulcrum.";

export default async function Image() {
  return renderOgImage({
    eyebrow: "a letter from the founder",
    title: "On the quiet middle.",
    subtitle: "Why fulcrum. exists, and why we're building it small on purpose.",
  });
}
