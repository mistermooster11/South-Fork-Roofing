import type { ChannelPageData } from "@/components/custom/channel/types";

const southforkRoofing: ChannelPageData = {
  slug: "southfork-roofing",

  navItems: [
    { href: "#channel",           label: "About Us"          },
    { href: "#helpful_resources", label: "Quick Links"       },
    { href: "#crafts",            label: "Our Services"      },
    { href: "#testimonials",      label: "Testimonials"      },
    { href: "#flex_feature",      label: "Emergency Service" },
    { href: "#get_in_touch",      label: "Get in Touch"      },
  ],

  hero: {
    title:           "The Hamptons' Trusted Roofing & Chimney Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31181.jpeg) no-repeat center center / cover",
    description: (
      <p>
        South Fork Roofing and Chimney has served East Hampton and the surrounding Hamptons
        communities since 1985. From roof repairs and full replacements to chimney rebuilds,
        siding, skylights, and gutters — our experienced team handles every project with the
        craftsmanship this region demands.
      </p>
    ),
  },

  learnMore: {
    title: "Serving The Hamptons for Over 40 Years",
    content: (
      <>
        <p>
          Established in East Hampton in 1985, South Fork Roofing and Chimney has spent over
          four decades protecting the homes and properties of Long Island. We&rsquo;ve built our
          reputation on quality materials, honest assessments, and workmanship that holds up
          against the coastal weather conditions unique to this part of New York.
        </p>

        <h5>Residential, Commercial &amp; Industrial</h5>
        <p>
          We serve homeowners, property managers, and commercial building owners throughout
          The Hamptons and all of Long Island. Whether it&rsquo;s a single-family residence in
          Amagansett or a commercial property in Southampton, our team arrives prepared and
          executes the job right.
        </p>

        <h5>Insurance Claims Assistance</h5>
        <p>
          Storm damage is one of the most common reasons homeowners call us. Our team works
          directly with insurance adjusters to document damage and ensure repairs are properly
          covered — so you don&rsquo;t have to navigate that process alone.
        </p>

        <h5>Free Estimates — No Obligation</h5>
        <p>
          Every project starts with a free inspection and written estimate. We explain exactly
          what we find, what we recommend, and what it will cost — before any work begins.
          Call us at (631) 527-6834 to schedule yours today.
        </p>

        <h5>Lifetime Warranty Shingles Available</h5>
        <p>
          We offer lifetime warranty roofing shingles on qualifying replacements — giving
          homeowners lasting peace of mind backed by manufacturer guarantees and our own
          workmanship warranty.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us Now — (631) 527-6834",  href: "tel:6315276834",  icon: "icon-message" },
      { title: "Contact Us Online",              href: "/contact-us",     icon: "icon-mail"    },
      { title: "Our Services",                   href: "/craft-catalog",  icon: "icon-link"    },
      { title: "Service Areas",                  href: "/service-areas",  icon: "icon-info"    },
      { title: "Frequently Asked Questions",     href: "/general-faqs",   icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We handle every aspect of exterior home protection — roofing repairs and replacements,
        chimney repair and rebuilds, flat roofing, siding, skylights, and gutters. Residential,
        commercial, and industrial. Serving East Hampton, Southampton, Bridgehampton, Hampton
        Bays, Amagansett, Montauk, and all of Long Island.
      </p>
    ),
    craftLinks: [
      { label: "Roof Repair",                  href: "/craft-catalog/roof-repair"                },
      { label: "Roof Replacement",             href: "/craft-catalog/roof-replacement"           },
      { label: "Flat Roofing",                 href: "/craft-catalog/flat-roofing"               },
      { label: "Emergency Roof Repair",        href: "/craft-catalog/emergency-roof-repair"      },
      { label: "Chimney Repair &amp; Cleaning",href: "/craft-catalog/chimney-repair-cleaning"    },
      { label: "Chimney Rebuild",              href: "/craft-catalog/chimney-rebuild"            },
      { label: "Siding",                       href: "/craft-catalog/siding"                     },
      { label: "Skylights",                    href: "/craft-catalog/skylights"                  },
      { label: "Gutters",                      href: "/craft-catalog/gutters"                    },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "For a very long time, South Fork has been handling the repairs at 2 of my properties. Never have I been let down. Tony is now the one who responds to all inquiries. I'm having a great time working with these guys!",
      name:     "Joel Wilson",
      position: "Long Island Property Owner",
    },
  },

  flexFeature: {
    imageSrc:
      "https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31141-768x1024.jpeg",
    title:       "Roofing Emergency?",
    body: (
      <p>
        Storm damage, active leaks, or collapsed sections — South Fork Roofing and Chimney
        provides emergency roof repair services across East Hampton and Long Island. Our
        team responds fast and secures your property while the full repair is assessed.
        Call <strong>(631) 527-6834</strong> now.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:6315276834",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule a free estimate or have a question about your roof, chimney, or
        siding? Call us at <strong>(631) 527-6834</strong> or use our online contact form
        and we&rsquo;ll get back to you promptly.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default southforkRoofing;
