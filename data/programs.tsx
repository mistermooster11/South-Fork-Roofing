import type { ReactNode } from "react";

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  imgSrc: string;
  alt: string;
  href: string;
};

export type ProgramsPageData = {
  navItems: { href: string; label: string }[];
  hero: {
    title: string;
    bgImage: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

const programsData: ProgramsPageData = {
  navItems: [
    { href: "#overview",  label: "Overview"  },
    { href: "#services",  label: "Services"  },
    { href: "#contact",   label: "Contact"   },
  ],

  hero: {
    title: "Our Services",
    bgImage:
      "https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31181.jpeg",
    description: (
      <p>
        South Fork Roofing and Chimney provides a complete range of exterior services
        for residential, commercial, and industrial properties throughout The Hamptons
        and Long Island — backed by 40+ years of local experience since 1985.
      </p>
    ),
    breadcrumbParentLabel: "Home",
    breadcrumbParentHref: "/",
  },

  overview: {
    content: (
      <>
        <p>
          From roof repairs and full replacements to chimney rebuilds, siding, skylights,
          and gutters — South Fork Roofing and Chimney handles every aspect of your
          home&apos;s exterior. We offer free estimates and work with insurance adjusters
          on storm damage claims.
        </p>
        <p>
          If you don&apos;t see your specific need listed, call us at (631) 527-6834 —
          we almost certainly cover it.
        </p>
      </>
    ),
    quickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834", icon: "icon-message" },
      { label: "Contact Us Online",   href: "/contact-us",    icon: "icon-mail"    },
      { label: "Service Areas",       href: "/service-areas", icon: "icon-info"    },
    ],
  },

  programs: [
    {
      title: "Roof Repair",
      content: (
        <p>
          Missing shingles, flashing failures, ice dam damage, and active leaks —
          we assess the full roof and repair what&apos;s actually wrong. Insurance
          claims assistance available for storm damage.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roof-repair",
    },
    {
      title: "Roof Replacement & Installation",
      content: (
        <p>
          Full tear-offs and new roof installations for residential, commercial, and
          industrial properties. Lifetime warranty shingles available. Most residential
          replacements completed in 1–2 days.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roof-replacement",
    },
    {
      title: "Flat Roofing",
      content: (
        <p>
          TPO, EPDM, and modified bitumen membrane installation and repair for flat
          and low-slope roofs on commercial buildings, home additions, and garages
          throughout Long Island.
        </p>
      ),
      learnMoreHref: "/craft-catalog/flat-roofing",
    },
    {
      title: "Emergency Roof Repair",
      content: (
        <p>
          Storm damage, fallen trees, and active leaks require immediate response.
          Our team dispatches fast to secure your property and stop water intrusion
          — then completes the full repair as quickly as possible.
        </p>
      ),
      learnMoreHref: "/craft-catalog/emergency-roof-repair",
    },
    {
      title: "Chimney Repair & Cleaning",
      content: (
        <p>
          Cracked crowns, spalling brick, failed flashing, and creosote buildup
          addressed by experienced chimney specialists. Annual cleaning recommended
          for any regularly used fireplace.
        </p>
      ),
      learnMoreHref: "/craft-catalog/chimney-repair-cleaning",
    },
    {
      title: "Chimney Rebuild",
      content: (
        <p>
          When deterioration has progressed beyond repair, we handle partial and full
          chimney rebuilds — matching brick and mortar to the original structure and
          rebuilding to current safety standards.
        </p>
      ),
      learnMoreHref: "/craft-catalog/chimney-rebuild",
    },
    {
      title: "Siding Installation & Repair",
      content: (
        <p>
          Isolated panel replacement through full exterior re-cladding. We work with
          all major siding materials and select products suited to Long Island&apos;s
          coastal weather conditions.
        </p>
      ),
      learnMoreHref: "/craft-catalog/siding",
    },
    {
      title: "Skylight Installation & Repair",
      content: (
        <p>
          New skylight installation, flashing replacement, seal failure repair, and
          glass or dome replacement. A properly installed skylight is an asset — an
          improperly sealed one is a persistent leak point.
        </p>
      ),
      learnMoreHref: "/craft-catalog/skylights",
    },
    {
      title: "Gutter Installation & Repair",
      content: (
        <p>
          Seamless gutter installation, downspout repair, joint sealing, and full
          system replacement. Properly functioning gutters protect your roof, siding,
          and foundation simultaneously.
        </p>
      ),
      learnMoreHref: "/craft-catalog/gutters",
    },
  ],

  partners: [],
};

export { programsData };
export default programsData;
