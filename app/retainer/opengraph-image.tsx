import { renderOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "The Retainer — fulcrum.";

export default async function Image() {
  return renderOgImage({
    eyebrow: "the retainer",
    title: "Most engagements end when the invoice does.",
    subtitle: "Ours do not. Weekly presence, execution accountability.",
  });
}
