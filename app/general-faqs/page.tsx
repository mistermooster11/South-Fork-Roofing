"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const faqItems = [
  {
    id: "faq-1",
    question: "What areas do you serve?",
    answer:
      "South Fork Roofing and Chimney serves East Hampton, Southampton, Bridgehampton, Hampton Bays, Amagansett, Montauk, and communities across Long Island. If you're not sure we cover your area, call us at (631) 527-6834 and we'll confirm right away.",
  },
  {
    id: "faq-2",
    question: "Do you offer free estimates?",
    answer:
      "Yes. Every project starts with a free inspection and written estimate. We document what we find, explain what we recommend, and give you the full price before any work begins. No obligation.",
  },
  {
    id: "faq-3",
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements take 1–2 days depending on the size of the home and the scope of work. We'll give you a realistic timeframe during the estimate process.",
  },
  {
    id: "faq-4",
    question: "Do you handle insurance claims?",
    answer:
      "Yes. South Fork Roofing and Chimney works directly with insurance adjusters on storm damage claims. We provide full photo documentation and communicate with adjusters throughout the claims process — so you don't have to navigate it alone.",
  },
  {
    id: "faq-5",
    question: "What's the difference between roof repair and roof replacement?",
    answer:
      "Repair is the right call when damage is isolated — a few missing shingles, a flashing failure, or a small leak area. Replacement makes more sense when the roof has reached the end of its lifespan, has widespread damage, or when the cost of repeated repairs approaches the cost of a new roof. We give you an honest assessment during the free inspection — including photos of every problem area.",
  },
  {
    id: "faq-6",
    question: "Do you offer emergency roof repair?",
    answer:
      "Yes. We provide emergency roof repair services for storm damage, fallen trees, and active leaks throughout Long Island. Call us at (631) 527-6834 — we dispatch fast and will secure your property while the full repair is assessed.",
  },
  {
    id: "faq-7",
    question: "How often should I have my chimney cleaned?",
    answer:
      "Annual chimney cleaning and inspection is recommended for any chimney that sees regular use. Creosote buildup — the primary cause of chimney fires — accumulates with every fire. Cleaning once per season is the most effective prevention available.",
  },
  {
    id: "faq-8",
    question: "Do you work on commercial and industrial properties?",
    answer:
      "Yes. South Fork Roofing and Chimney provides roofing, chimney, siding, skylight, and gutter services for residential, commercial, and industrial properties throughout Long Island.",
  },
];

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Help Center</div>
            <h1 className="h2">Frequently Asked Questions</h1>
            <p className="p2">
              Common questions about South Fork Roofing and Chimney services,
              pricing, and coverage. Don&apos;t see your question?{" "}
              <a href="tel:6315276834" className="ia-link">Call us at (631) 527-6834</a>.
            </p>
          </div>

          <div className="content-block-in wide">
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {faqItems.map((item, i) => (
                <div
                  key={item.id}
                  className={`fadeInUpS wow${vis}`}
                  style={{
                    animationDelay: `${i * 0.06}s`,
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2rem 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1.5rem",
                    }}
                  >
                    <span className="p1" style={{ fontWeight: 600 }}>
                      {item.question}
                    </span>
                    <span
                      style={{
                        fontSize: "2rem",
                        color: "#1A1A1C",
                        flexShrink: 0,
                        transform: openId === item.id ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openId === item.id && (
                    <div className="content-entry p2 ia-dark" style={{ paddingBottom: "2rem" }}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA strip */}
      <div className="flex-module ia-bg-sky" style={{ padding: "5rem 0" }}>
        <div className="inner inner--slim-1172" style={{ textAlign: "center" }}>
          <div className="sub-heading">Still Have Questions?</div>
          <h2 className="h3" style={{ marginBottom: "1.5rem" }}>
            Call Us — Available 24 Hours, 7 Days a Week
          </h2>
          <p className="p2" style={{ marginBottom: "2.5rem" }}>
            Our team is happy to answer any question over the phone and schedule
            a free estimate for your project.
          </p>
          <a href="tel:6315276834" className="ia-btn">
            <em className="ia-b ia-b-1" /><em className="ia-b ia-b-2" />
            <em className="ia-b ia-b-3" /><em className="ia-b ia-b-4" />
            <span>Call (631) 527-6834</span>
          </a>
        </div>
      </div>
    </main>
  );
}
