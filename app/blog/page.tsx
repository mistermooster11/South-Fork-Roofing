"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

// [TODO: Replace all posts below with real blog content once published]
const posts = [
  {
    id: "post-1",
    title: "5 Signs Your Roof Needs to Be Replaced — Not Just Repaired",
    excerpt:
      "Missing shingles or a small leak doesn't always mean it's time for a new roof. But some signs make replacement the smarter call. Here's how to tell the difference.",
    date: "May 2026",
    slug: "#",
  },
  {
    id: "post-2",
    title: "How to File a Roof Insurance Claim After a Storm on Long Island",
    excerpt:
      "Nor'easters, heavy snow, and coastal storms cause real damage. Here's how the insurance claim process works — and how working with the right contractor makes it smoother.",
    date: "April 2026",
    slug: "#",
  },
  {
    id: "post-3",
    title: "Chimney Maintenance: What Every Hamptons Homeowner Should Know Before Winter",
    excerpt:
      "A chimney that hasn't been cleaned or inspected is a fire risk. This guide covers what annual maintenance looks like, what we check, and why it matters.",
    date: "March 2026",
    slug: "#",
  },
  {
    id: "post-4",
    title: "Flat Roofs vs. Pitched Roofs: Which Is Better for Long Island Homes?",
    excerpt:
      "Each roof type has real trade-offs in our coastal climate. We break down the differences in maintenance requirements, material options, and long-term cost.",
    date: "February 2026",
    slug: "#",
  },
  {
    id: "post-5",
    title: "Why Gutters Matter More Than Most Homeowners Think",
    excerpt:
      "A failing gutter system is one of the most common causes of foundation problems, ice dams, and water damage to siding. Here's what to watch for.",
    date: "January 2026",
    slug: "#",
  },
  {
    id: "post-6",
    title: "How Coastal Salt Air Affects Roofing Materials on Long Island",
    excerpt:
      "The Hamptons coastline is beautiful — and hard on roofs. We explain how salt-air exposure accelerates shingle wear and what material choices help.",
    date: "December 2025",
    slug: "#",
  },
];

export default function BlogPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Roofing Tips & Resources"
        bgImage="https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31181.jpeg"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">From the South Fork Roofing Team</div>
            <h1 className="h2">Roofing Tips &amp; Guides for Long Island Homeowners</h1>
            <p className="p2">
              Practical advice from our team — roofing, chimneys, siding, and more.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "3rem",
              marginTop: "3rem",
            }}
            className="max-[700px]:grid-cols-1"
          >
            {posts.map((post, i) => (
              <div
                key={post.id}
                className={`fadeInUpS wow${vis}`}
                style={{
                  animationDelay: `${i * 0.08}s`,
                  borderBottom: "2px solid #1A1A1C",
                  paddingBottom: "2rem",
                }}
              >
                <p className="p3 ia-medium" style={{ marginBottom: "0.75rem" }}>
                  {post.date}
                </p>
                <h2 className="h4" style={{ marginBottom: "1rem" }}>
                  {post.title}
                </h2>
                <p className="p2 ia-dark">
                  {post.excerpt}
                </p>
                {/* [TODO: Link to actual post once published] */}
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
