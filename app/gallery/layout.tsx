import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery — Roofing & Exterior Work",
  description:
    "See completed projects by South Fork Roofing and Chimney — roof repairs, replacements, chimney rebuilds, siding, skylights, and gutters across The Hamptons and Long Island.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
