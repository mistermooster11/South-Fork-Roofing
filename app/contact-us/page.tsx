"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Styled submit button ── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -60px 0px" });
  const vis = sectionInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <CraftHero
        title="Contact Us"
        bgImage="https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31181.jpeg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form + Map ── */}
      <div ref={sectionRef} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Schedule a Free Estimate or Ask a Question
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "2.5rem" }}
          >
            Fill out the form below or call us directly at{" "}
            <strong>(631) 527-6834</strong>. We&apos;re available 24/7 for
            emergency roofing situations.
          </p>

          {/* Two-column: form left, map right. Stacks on mobile. */}
          <div className="contact-layout-grid">

            {/* ── Form ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.2s" }}>
              {/* TODO: Replace with real form backend (Gravity Forms, JotForm, HubSpot, etc.) */}
              <form
                action="#"
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <div className="form-row-2col">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="name" className="p3 ia-medium">Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your full name"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="(555) 000-0000"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="email" className="p3 ia-medium">Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                    <select
                      id="service" name="service"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                    >
                      <option value="">Select a service…</option>
                      <option>Roof Repair</option>
                      <option>Roof Replacement &amp; Installation</option>
                      <option>Flat Roofing</option>
                      <option>Emergency Roof Repair</option>
                      <option>Chimney Repair &amp; Cleaning</option>
                      <option>Chimney Rebuild</option>
                      <option>Siding Installation &amp; Repair</option>
                      <option>Skylight Installation &amp; Repair</option>
                      <option>Gutter Installation &amp; Repair</option>
                      <option>Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Describe the issue — what's happening and where?"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", resize: "vertical" }}
                  />
                </div>

                <div>
                  <SubmitBtn />
                </div>
              </form>
            </div>

            {/* ── Map ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
              {/* [TODO: Replace embed src with verified Google Maps embed for 105 Newtown Ln, East Hampton NY 11937] */}
              <iframe
                title="South Fork Roofing and Chimney — East Hampton, NY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3!2d-72.1876!3d40.9634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e84c1234567890%3A0xabcdef1234567890!2s105%20Newtown%20Ln%2C%20East%20Hampton%2C%20NY%2011937!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                height="340"
                style={{ border: 0, display: "block", borderRadius: "6px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p3 ia-medium" style={{ marginTop: "1.25rem", lineHeight: "1.7" }}>
                <strong>South Fork Roofing and Chimney</strong><br />
                105 Newtown Ln, East Hampton, NY 11937<br />
                <a href="tel:6315276834" style={{ color: "inherit" }}>(631) 527-6834</a><br />
                <a href="mailto:southforkroofingandchimney@gmail.com" style={{ color: "inherit" }}>southforkroofingandchimney@gmail.com</a><br />
                Available 24 Hours / 7 Days a Week
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 860px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .form-row-2col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </main>
  );
}
