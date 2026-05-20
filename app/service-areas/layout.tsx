import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas — East Hampton, Southampton, Hampton Bays & Long Island",
  description:
    "South Fork Roofing and Chimney serves East Hampton, Southampton, Bridgehampton, Hampton Bays, Amagansett, Montauk, and all of Long Island. Available 24/7.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
