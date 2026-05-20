import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Tips & Resources",
  description:
    "Roofing guides and tips from South Fork Roofing and Chimney — covering roof repair, replacement, chimney maintenance, storm damage claims, and coastal Long Island conditions.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
