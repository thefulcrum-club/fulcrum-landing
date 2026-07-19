import { renderOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Engagement — fulcrum.";

export default async function Image() {
  return renderOgImage({
    eyebrow: "how we work",
    title: "Four rooms. One conversation.",
    subtitle: "How we work with founders, from the audit to the build.",
  });
}
