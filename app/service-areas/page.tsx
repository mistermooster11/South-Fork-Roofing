"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

const areas = [
  {
    slug: "east-hampton",
    region: "East Hampton",
    headline: "Roofing & Chimney Services in East Hampton, NY",
    description:
      "East Hampton is our home base. We've been serving homeowners and property managers in East Hampton since 1985 — handling everything from shingle repairs on historic homes to full roof replacements on new construction. We know the building stock, the coastal weather patterns, and what materials hold up in this environment.",
    callouts: [
      "Residential, commercial, and industrial roofing",
      "Chimney repair, cleaning, and rebuilds",
      "Storm damage repair and insurance claims assistance",
      "Siding, skylights, and gutter installation",
    ],
    neighborhoods:
      "East Hampton Village • Springs • Wainscott • Northwest Harbor • Three Mile Harbor • Amagansett • and surrounding areas",
  },
  {
    slug: "southampton",
    region: "Southampton",
    headline: "Roofing & Chimney Services in Southampton, NY",
    description:
      "Southampton's mix of historic estates, waterfront homes, and newer residential construction requires roofing expertise that accounts for coastal exposure and premium finishes. South Fork Roofing and Chimney handles the full range — from emergency storm repairs to complete roof system installations.",
    callouts: [
      "Roof repairs and full replacements for all structure types",
      "Flat roofing for additions and commercial buildings",
      "Chimney repair, repointing, and crown work",
      "Gutter installation and downspout routing",
    ],
    neighborhoods:
      "Southampton Village • North Sea • Water Mill • Bridgehampton • Sagaponack • Tuckahoe • and surrounding areas",
  },
  {
    slug: "hampton-bays",
    region: "Hampton Bays",
    headline: "Roofing & Chimney Services in Hampton Bays, NY",
    description:
      "Hampton Bays homes face salt-air exposure, strong coastal winds, and seasonal weather extremes that accelerate roofing wear. Our team serves Hampton Bays for all residential and commercial roofing, chimney, siding, skylight, and gutter work — with free estimates and insurance claims assistance for storm damage.",
    callouts: [
      "Roof repair and replacement for coastal homes",
      "Emergency roof repair for storm events",
      "Siding installation suited to coastal conditions",
      "Chimney cleaning, repair, and rebuilds",
    ],
    neighborhoods:
      "Hampton Bays • Shinnecock Hills • Good Ground • Ponquogue • and surrounding areas",
  },
  {
    slug: "montauk",
    region: "Montauk",
    headline: "Roofing & Chimney Services in Montauk, NY",
    description:
      "Montauk's extreme coastal exposure demands roofing materials and installation methods built to handle salt air, high winds, and year-round weather stress. South Fork Roofing and Chimney has served Montauk homeowners and property owners for decades — providing honest assessments and installations that last.",
    callouts: [
      "Wind-resistant roofing systems for coastal exposure",
      "Emergency roof repair and storm response",
      "Flat roofing and modified bitumen for commercial properties",
      "Gutter and siding systems designed for coastal durability",
    ],
    neighborhoods:
      "Montauk Village • Fort Pond • Hither Hills • Ditch Plains • and surrounding areas",
  },
  {
    slug: "long-island",
    region: "All of Long Island",
    headline: "Roofing & Chimney Services Across Long Island",
    description:
      "Beyond The Hamptons, South Fork Roofing and Chimney has served roofing and exterior needs across Long Island since 1985. Whether you're in the North Fork, the South Shore, or Nassau County, our experienced team handles all types of residential, commercial, and industrial roofing projects.",
    callouts: [
      "Roofing for all Long Island communities",
      "Commercial and industrial roofing available",
      "Insurance claims handling for storm damage",
      "Full exterior services: chimneys, siding, skylights, gutters",
    ],
    neighborhoods:
      "East Hampton &bull; Southampton &bull; Bridgehampton &bull; Hampton Bays &bull; Amagansett &bull; Montauk &bull; Westhampton &bull; Riverhead &bull; Southold &bull; Greenport &bull; and communities across Long Island",
  },
];

function AreaSection({
  area,
  index,
  vis,
}: {
  area: (typeof areas)[number];
  index: number;
  vis: string;
}) {
  return (
    <div
      id={area.slug}
      className={`fadeInUpS wow${vis}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        paddingBottom: "3.5rem",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <h2 className="h3 ia-margin-1">{area.headline}</h2>
      <p className="p2 ia-dark" style={{ marginBottom: "1.5rem" }}>
        {area.description}
      </p>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
        {area.callouts.map((c) => (
          <li key={c} className="p2 ia-dark" style={{ marginBottom: "0.5rem" }}>
            {c}
          </li>
        ))}
      </ul>
      <p className="p3 ia-medium">{area.neighborhoods}</p>
    </div>
  );
}

export default function ServiceAreasPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Service Areas"
        bgImage="https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31181.jpeg"
        breadcrumbs={[{ label: "Service Areas" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Where We Work</div>
            <h1 className="h2">Roofing &amp; Chimney Services Across The Hamptons &amp; Long Island</h1>
            <p className="p2">
              South Fork Roofing and Chimney has served East Hampton and surrounding communities since 1985.
              We provide residential, commercial, and industrial roofing, chimney, siding, skylight, and gutter services
              across Long Island. Call{" "}
              <a href="tel:6315276834" className="ia-link">(631) 527-6834</a> to schedule your free estimate.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {areas.map((area, i) => (
              <AreaSection key={area.slug} area={area} index={i} vis={vis} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
