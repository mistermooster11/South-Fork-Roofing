import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing FAQs",
  description:
    "Common questions about South Fork Roofing and Chimney — service area, free estimates, roof replacement timelines, insurance claims, chimney cleaning, and more.",
  alternates: { canonical: "/general-faqs" },
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
