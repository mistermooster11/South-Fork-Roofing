import { notFound } from "next/navigation";
import CraftHero       from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar  from "@/components/custom/channel/ChannelSidebar";
import CraftOverview   from "@/components/custom/craft-catalog/CraftOverview";
import RelatedCrafts   from "@/components/custom/craft-catalog/RelatedCrafts";
import { servicePages } from "@/data/craft-catalog/service-pages";

const SERVICE_IMAGES: Record<string, string> = {
  "roof-repair":             "/images/roofer-inspecting-asphalt-shingles-closeup.jpg",
  "roof-replacement":        "/images/roofing-crew-installing-shingles-aerial-view.jpg",
  "flat-roofing":            "/images/worker-applying-roof-coating-roller.jpg",
  "emergency-roof-repair":   "/images/roofer-installing-shingles-aerial-view.jpg",
  "chimney-repair-cleaning": "/images/chimney-inspection-repair-rooftop-worker.jpg",
  "chimney-rebuild":         "/images/roofing-crew-aerial-safety-harness-installation.jpg",
  "siding":                  "/images/roofer-installing-metal-roofing-panels-closeup.jpg",
  "skylights":               "/images/modern-metal-roof-dormers-wooden-accents.jpg",
  "gutters":                 "/images/worker-cleaning-gutters-ladder-autumn.jpg",
};

/* Pre-render all known service slugs at build time */
export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: `${data.title} — South Fork Roofing and Chimney`,
    description: `Professional ${data.title.toLowerCase()} services in East Hampton and across The Hamptons and Long Island. Free estimates, licensed & insured. Call (631) 527-6834.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title={data.title}
        bgImage={SERVICE_IMAGES[slug] ?? "/images/roofing-crew-working-residential-roof-installation.jpg"}
        breadcrumbs={[
          { label: "Services", href: "/craft-catalog" },
          { label: data.title },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />

          <div className="channel-container">

            {/* ── Overview ─────────────────────────────────────────────── */}
            <div id="overview">
              <CraftOverview
                overviewContent={data.overviewContent}
                quickLinks={data.overviewQuickLinks}
              />
            </div>

            {/* ── Middle sections ──────────────────────────────────────── */}
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="section-page">
                <div className="content-block">
                  <div className="inner inner--slim-1172 cleared">
                    <h2 className="h3 fadeInUpS wow is-visible">
                      {section.heading}
                    </h2>
                    <div className="cleared">
                      <div className="content-entry p2 fadeInUpS wow is-visible">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ── CTA banner ───────────────────────────────────────────── */}
            <div className="banner-craft ia-bg-sky fadeInUp wow is-visible">
              <div className="inner">
                <div className="content-entry p3">
                  <p>
                    <strong>Ready to book?</strong>{" "}
                    Call{" "}
                    <a href="tel:6315276834">(631) 527-6834</a>{" "}
                    for a free estimate, or{" "}
                    <a href="/contact-us">send us a message online</a>.
                    We inspect, quote, and complete every job right.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Related Services ─────────────────────────────────────── */}
            <div id="related_services">
            <RelatedCrafts
              description={
                <p>
                  South Fork Roofing and Chimney handles roofing, chimney, siding,
                  skylights, and gutters across The Hamptons and Long Island. Explore
                  our other services below.
                </p>
              }
              crafts={data.relatedServices}
            />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
