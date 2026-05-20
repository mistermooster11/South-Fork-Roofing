import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Free Estimate",
  description:
    "Contact South Fork Roofing and Chimney for a free estimate. Call (631) 527-6834 or fill out our online form. Available 24 hours, 7 days a week across The Hamptons and Long Island.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
