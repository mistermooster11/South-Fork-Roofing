"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

const galleryItems = [
  {
    label: "Roof Repair — East Hampton Residential",
    image: "/images/roofer-inspecting-asphalt-shingles-closeup.jpg",
  },
  {
    label: "Chimney Repair — Hamptons Property",
    image: "/images/chimney-inspection-repair-rooftop-worker.jpg",
  },
  {
    label: "Full Roof Replacement — Long Island Home",
    image: "/images/modern-home-slate-roof-mountain-valley.jpg",
  },
  {
    label: "Flat Roofing — Commercial Property",
    image: "/images/worker-applying-roof-coating-roller.jpg",
  },
  {
    label: "Siding Installation — East Hampton Residence",
    image: "https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31181.jpeg", // [TODO: Replace with actual siding job photo — no library match]
  },
  {
    label: "Gutter Installation — Hamptons Home",
    image: "/images/worker-cleaning-gutters-autumn-leaves.jpg",
  },
];

export default function GalleryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Our Work"
        bgImage="https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31181.jpeg"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">
          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Job Gallery</div>
            <h1 className="h2">Roofing &amp; Exterior Work Across The Hamptons</h1>
            <p className="p2">
              A sample of completed projects by South Fork Roofing and Chimney throughout
              East Hampton, Southampton, and Long Island — from roof repairs and replacements
              to chimney rebuilds, siding, and gutters.
            </p>
          </div>

          {/* 2-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
              marginTop: "3rem",
            }}
            className="max-[600px]:grid-cols-1"
          >
            {galleryItems.map((item, i) => (
              <div
                key={item.label}
                className={`fadeInUpS wow${vis}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  style={{
                    aspectRatio: "4/3",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#101d2b",
                    borderRadius: "4px",
                    marginBottom: "1rem",
                  }}
                />
                <p className="p3 ia-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.4s", marginTop: "4rem", textAlign: "center" }}
          >
            <p className="p2" style={{ marginBottom: "2rem" }}>
              Want to see more of our work? Call us at{" "}
              <a href="tel:6315276834" className="ia-link">(631) 527-6834</a> — we&apos;re
              happy to discuss your project and what we&apos;ve done for similar jobs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
