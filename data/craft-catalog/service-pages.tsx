import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  bgColor: string;
  navItems: ServiceNavItem[];
  overviewContent: ReactNode;
  overviewQuickLinks: { label: string; href: string }[];
  sections: { id: string; heading: string; content: ReactNode }[];
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  "roof-repair": {
    title: "Roof Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          From missing shingles and flashing failures to ice dam damage and active leaks —
          South Fork Roofing and Chimney diagnoses and repairs roofing issues throughout
          East Hampton, Southampton, and all of Long Island.
        </p>
        <p>
          Our team assesses the full roof, not just the visible damage, and repairs what&apos;s
          actually wrong. We work on residential, commercial, and industrial structures and
          coordinate directly with insurance adjusters when storm damage is involved.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Roof Repair?",
        content: (
          <>
            <p>
              Missing or curling shingles, dark stains on interior ceilings, visible daylight
              through attic boards, granules collecting in gutters, or ice dams forming in
              winter are all signs your roof needs professional attention.
            </p>
            <p>
              Coastal Long Island weather — nor&apos;easters, heavy snow, and salt-air
              exposure — accelerates roofing wear. Early repair prevents much more costly
              structural damage down the line.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Free Inspection.</strong> We inspect the full roof and document all problem areas with photos.</p>
            <p><strong>Step 2 — Written Estimate.</strong> You get a detailed quote before any work begins. No surprises.</p>
            <p><strong>Step 3 — Repair.</strong> Our licensed crew handles the repair with quality materials matched to your existing roof.</p>
            <p><strong>Step 4 — Final Walkthrough.</strong> We inspect the completed work and clean up all debris before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Replacement",      href: "/craft-catalog/roof-replacement"      },
      { label: "Emergency Roof Repair", href: "/craft-catalog/emergency-roof-repair" },
      { label: "Flat Roofing",          href: "/craft-catalog/flat-roofing"          },
      { label: "Gutters",               href: "/craft-catalog/gutters"               },
    ],
  },

  "roof-replacement": {
    title: "Roof Replacement & Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          When repair is no longer cost-effective, South Fork Roofing and Chimney handles
          full roof tear-offs and replacements for residential, commercial, and industrial
          properties throughout The Hamptons and Long Island.
        </p>
        <p>
          We offer lifetime warranty roofing shingles on qualifying projects, use
          manufacturer-grade materials, and back every installation with our own
          workmanship warranty. Established in East Hampton since 1985 — we know
          this region&apos;s weather demands and build accordingly.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Is Replacement the Right Call?",
        content: (
          <>
            <p>
              Most asphalt shingle roofs last 20–30 years. If your roof is in that range
              and experiencing multiple problem areas, widespread granule loss, sagging
              decking, or has sustained major storm damage — replacement is almost always
              more economical than continued piecemeal repair.
            </p>
            <p>
              We give you an honest assessment during the free inspection — including
              photos of every problem area — so you can make an informed decision.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Free Inspection.</strong> We document existing conditions and confirm whether replacement is warranted.</p>
            <p><strong>Step 2 — Written Estimate.</strong> Detailed quote broken down by material and labor.</p>
            <p><strong>Step 3 — Full Tear-Off &amp; Install.</strong> We strip the old roof, inspect the decking, and install the new system. Most residential replacements take 1–2 days.</p>
            <p><strong>Step 4 — Cleanup &amp; Walkthrough.</strong> All debris hauled away. We inspect the finished roof with you before closing out.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Repair",           href: "/craft-catalog/roof-repair"           },
      { label: "Flat Roofing",          href: "/craft-catalog/flat-roofing"          },
      { label: "Gutters",               href: "/craft-catalog/gutters"               },
      { label: "Siding",                href: "/craft-catalog/siding"                },
    ],
  },

  "flat-roofing": {
    title: "Flat Roofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          South Fork Roofing and Chimney installs and repairs flat and low-slope roofing
          systems for residential and commercial properties across Long Island — including
          TPO, EPDM, and modified bitumen membranes.
        </p>
        <p>
          Flat roofs on commercial buildings, home additions, and garages require different
          materials and drainage design than pitched shingle roofs. Our team handles the
          full scope — from new installations to membrane repairs and recoating.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Flat Roof Service?",
        content: (
          <>
            <p>
              Pooling water that doesn&apos;t drain within 48 hours, blistering or bubbling
              on the membrane surface, visible cracks or separations at seams, or interior
              leaks directly below the flat roof section are all signs of a problem.
            </p>
            <p>
              Flat roofs are particularly vulnerable to coastal Long Island weather —
              freeze-thaw cycles and heavy rain stress membrane seams and drainage points
              over time. Proactive maintenance extends membrane life significantly.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Inspect.</strong> We assess the full membrane system and drainage configuration.</p>
            <p><strong>Step 2 — Free Estimate.</strong> Written quote before any work begins.</p>
            <p><strong>Step 3 — Repair or Install.</strong> We use the right material for the system — TPO, EPDM, or modified bitumen — installed to manufacturer specifications.</p>
            <p><strong>Step 4 — Test &amp; Confirm.</strong> We verify drainage and membrane integrity before the job is closed.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Repair",       href: "/craft-catalog/roof-repair"       },
      { label: "Roof Replacement",  href: "/craft-catalog/roof-replacement"  },
      { label: "Gutters",           href: "/craft-catalog/gutters"           },
      { label: "Siding",            href: "/craft-catalog/siding"            },
    ],
  },

  "emergency-roof-repair": {
    title: "Emergency Roof Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Storm damage, fallen trees, collapsed sections, and active leaks require immediate
          response. South Fork Roofing and Chimney provides emergency roof repair services
          across East Hampton and Long Island — securing your property fast while the full
          repair scope is assessed.
        </p>
        <p>
          Our team has been responding to roofing emergencies on Long Island since 1985.
          We know the region&apos;s weather patterns and respond fast when nor&apos;easters,
          heavy snow, or wind events cause sudden structural damage.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Is It an Emergency?",
        content: (
          <>
            <p>
              Active water intrusion during a storm, a section of roof that has collapsed
              or been punctured by a falling tree limb, structural sagging after heavy snow
              load, or wind damage that has lifted or removed large sections of roofing —
              all require immediate action.
            </p>
            <p>
              Even if the weather is still poor, temporary protective measures can prevent
              a bad situation from becoming catastrophic. Call us immediately — we dispatch
              fast.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Fast Response.</strong> We dispatch a crew as quickly as possible to assess the damage and secure the structure.</p>
            <p><strong>Step 2 — Temporary Protection.</strong> We install tarping or temporary roofing to stop active water intrusion while the full repair is planned.</p>
            <p><strong>Step 3 — Damage Assessment &amp; Estimate.</strong> Full documentation of damage — useful for insurance claims.</p>
            <p><strong>Step 4 — Permanent Repair.</strong> We complete the full repair as quickly as possible using quality materials.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Repair",      href: "/craft-catalog/roof-repair"      },
      { label: "Roof Replacement", href: "/craft-catalog/roof-replacement"  },
      { label: "Flat Roofing",     href: "/craft-catalog/flat-roofing"     },
      { label: "Chimney Repair",   href: "/craft-catalog/chimney-repair-cleaning" },
    ],
  },

  "chimney-repair-cleaning": {
    title: "Chimney Repair & Cleaning",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          South Fork Roofing and Chimney provides professional chimney repair and cleaning
          services throughout East Hampton and Long Island. We address cracked crowns,
          spalling brick, failed flashing, mortar joint deterioration, and creosote
          buildup — all of which compromise safety and structural integrity.
        </p>
        <p>
          A damaged or dirty chimney is a fire hazard and a water intrusion point.
          Our team inspects, cleans, and repairs chimney systems on residential and
          commercial properties using proper materials and techniques.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Chimney Service?",
        content: (
          <>
            <p>
              White staining (efflorescence) on the chimney exterior, crumbling mortar
              joints, a cracked or damaged crown, water entering the fireplace area,
              or a chimney that hasn&apos;t been cleaned in over a year are all reasons
              to call.
            </p>
            <p>
              Annual chimney cleaning is recommended for any chimney that sees regular
              use. Creosote buildup is the primary cause of chimney fires — cleaning
              and inspection every season is the most cost-effective prevention available.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Inspect.</strong> We assess the crown, flashing, mortar joints, liner, and flue for any damage or buildup.</p>
            <p><strong>Step 2 — Free Estimate.</strong> Written quote before any work begins.</p>
            <p><strong>Step 3 — Clean &amp; Repair.</strong> We clean the flue and address any structural issues — crown repair, repointing, flashing replacement — as needed.</p>
            <p><strong>Step 4 — Final Check.</strong> We confirm the chimney is safe, clean, and properly sealed before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Chimney Rebuild",       href: "/craft-catalog/chimney-rebuild"       },
      { label: "Roof Repair",           href: "/craft-catalog/roof-repair"           },
      { label: "Emergency Roof Repair", href: "/craft-catalog/emergency-roof-repair" },
      { label: "Skylights",             href: "/craft-catalog/skylights"             },
    ],
  },

  "chimney-rebuild": {
    title: "Chimney Rebuild",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          When a chimney has deteriorated beyond what repair can address — severely spalled
          brick, structural failure, or significant lean — a partial or full rebuild is the
          right call. South Fork Roofing and Chimney handles chimney rebuilds for residential
          and commercial properties throughout Long Island.
        </p>
        <p>
          We assess the extent of deterioration, match materials as closely as possible to
          the original structure, and rebuild to current standards — ensuring both safety
          and visual continuity with the existing home.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Does a Chimney Need to Be Rebuilt?",
        content: (
          <>
            <p>
              Severely deteriorated mortar throughout the entire chimney, structural
              cracking that extends through multiple courses of brick, a chimney that
              is visibly leaning, or one that has suffered major fire or storm damage
              often require a partial or full rebuild rather than repair.
            </p>
            <p>
              A chimney inspection determines exactly how far the damage extends.
              We&apos;ll tell you honestly whether repair or rebuild is the more
              cost-effective choice.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Full Assessment.</strong> We evaluate the extent of deterioration and determine the scope of the rebuild.</p>
            <p><strong>Step 2 — Written Estimate.</strong> Detailed price before work begins.</p>
            <p><strong>Step 3 — Rebuild.</strong> We demolish the deteriorated section, match brick and mortar to the original as closely as possible, and rebuild to current standards.</p>
            <p><strong>Step 4 — Final Inspection &amp; Cleanup.</strong> We inspect the finished chimney and remove all debris before closing.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Chimney Repair & Cleaning", href: "/craft-catalog/chimney-repair-cleaning" },
      { label: "Roof Repair",               href: "/craft-catalog/roof-repair"             },
      { label: "Roof Replacement",          href: "/craft-catalog/roof-replacement"        },
      { label: "Siding",                    href: "/craft-catalog/siding"                  },
    ],
  },

  "siding": {
    title: "Siding Installation & Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          South Fork Roofing and Chimney installs and repairs siding for residential and
          commercial properties throughout The Hamptons and Long Island. We work with all
          major siding materials and handle everything from isolated panel replacements
          to full exterior re-cladding projects.
        </p>
        <p>
          Coastal Long Island homes face unique challenges — salt air, wind, and moisture
          demand siding materials and installation methods that hold up to the environment.
          Our team selects and installs accordingly.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Siding Service?",
        content: (
          <>
            <p>
              Warped, cracked, or missing panels, visible rot beneath the surface layer,
              increased heating and cooling costs, mold or moisture issues at exterior
              walls, or storm damage are all reasons to call.
            </p>
            <p>
              Siding is your home&apos;s first layer of defense against weather. Damaged
              siding lets moisture into wall cavities, leading to insulation damage and
              eventually structural rot — catching it early saves significantly on repairs.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Inspect.</strong> We assess the full exterior, identify all damage, and evaluate the underlying sheathing.</p>
            <p><strong>Step 2 — Free Estimate.</strong> Written quote before any work begins.</p>
            <p><strong>Step 3 — Install or Repair.</strong> We remove damaged sections, address any moisture damage beneath, and install new siding with proper flashing and fastening.</p>
            <p><strong>Step 4 — Final Walkthrough.</strong> We inspect the completed installation and haul away all material debris.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Repair",       href: "/craft-catalog/roof-repair"      },
      { label: "Gutters",           href: "/craft-catalog/gutters"          },
      { label: "Skylights",         href: "/craft-catalog/skylights"        },
      { label: "Roof Replacement",  href: "/craft-catalog/roof-replacement" },
    ],
  },

  "skylights": {
    title: "Skylight Installation & Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          South Fork Roofing and Chimney installs and repairs skylights for residential
          and commercial properties throughout The Hamptons and Long Island. A properly
          installed skylight brings natural light into interior spaces — an improperly
          sealed one becomes a persistent leak point.
        </p>
        <p>
          Our team handles skylight installation, flashing replacement, seal failures,
          and glass or dome replacement on all major skylight brands and styles.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Skylight Service?",
        content: (
          <>
            <p>
              Water staining around the skylight frame, condensation between panes, visible
              cracking in the dome or glass, or a draft around the skylight surround are all
              signs of a seal or installation failure.
            </p>
            <p>
              Many skylight leaks are actually flashing failures at the roof-to-frame
              junction — not the skylight unit itself. Our team diagnoses the exact source
              before recommending a solution.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Inspect.</strong> We assess the skylight unit, surrounding flashing, and roof deck for water infiltration.</p>
            <p><strong>Step 2 — Free Estimate.</strong> Written quote before any work begins.</p>
            <p><strong>Step 3 — Repair or Install.</strong> We address the root cause — whether it&apos;s flashing, sealing, the unit itself, or surrounding roofing.</p>
            <p><strong>Step 4 — Test &amp; Confirm.</strong> We verify the installation is watertight before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Repair",       href: "/craft-catalog/roof-repair"      },
      { label: "Roof Replacement",  href: "/craft-catalog/roof-replacement" },
      { label: "Siding",            href: "/craft-catalog/siding"           },
      { label: "Gutters",           href: "/craft-catalog/gutters"          },
    ],
  },

  "gutters": {
    title: "Gutter Installation & Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Gutters are the drainage system that protects your roof edge, siding, and
          foundation from water damage. South Fork Roofing and Chimney installs and
          repairs gutters for residential and commercial properties throughout The
          Hamptons and Long Island.
        </p>
        <p>
          We handle seamless gutter installation, downspout repair, joint sealing,
          and full gutter system replacement. Properly installed gutters move water
          away from your structure efficiently — keeping the rest of your exterior
          investment protected.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (631) 527-6834", href: "tel:6315276834" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Gutter Service?",
        content: (
          <>
            <p>
              Gutters pulling away from the fascia, visible sagging, water overflowing
              during rain, staining or erosion at the foundation line, or water pooling
              along the house perimeter are all signs of a drainage problem.
            </p>
            <p>
              Clogged or damaged gutters are a leading cause of ice dams in Long Island
              winters. A functioning gutter system is one of the most cost-effective ways
              to protect your roof, siding, and foundation simultaneously.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Inspect.</strong> We assess the full gutter system including fascia boards, slope, and downspout routing.</p>
            <p><strong>Step 2 — Free Estimate.</strong> Written quote before any work begins.</p>
            <p><strong>Step 3 — Repair or Install.</strong> We seal leaking joints, re-hang sagging sections, replace damaged lengths, or install a complete new system as needed.</p>
            <p><strong>Step 4 — Flow Test.</strong> We run water through the system to confirm proper drainage before completing the job.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Repair",       href: "/craft-catalog/roof-repair"      },
      { label: "Roof Replacement",  href: "/craft-catalog/roof-replacement" },
      { label: "Siding",            href: "/craft-catalog/siding"           },
      { label: "Skylights",         href: "/craft-catalog/skylights"        },
    ],
  },

};
