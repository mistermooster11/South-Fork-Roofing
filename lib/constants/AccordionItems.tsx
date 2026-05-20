
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Roof Repair",
    image: "/images/IMG_31181.jpeg",
    // [TODO: Replace with South Fork Roofing roof repair job photo]
    description:
      "From missing shingles and flashing failures to ice dam damage — South Fork Roofing and Chimney diagnoses and repairs roofing issues on residential, commercial, and industrial properties throughout East Hampton and Long Island.",
    learnHref: "/craft-catalog/roof-repair",
    steps: [
      { label: "Free Inspection", body: "We inspect the full roof and document all damage with photos before recommending any work." },
      { label: "Written Estimate", body: "You get a detailed quote before any work begins. What we quote is what you pay." },
      { label: "Repair", body: "Our licensed crew repairs the issue using quality materials matched to your existing roof." },
      { label: "Cleanup & Walkthrough", body: "We inspect the completed work with you and haul away all debris before leaving." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Chimney Repair & Cleaning",
    image: "/images/IMG_31141.jpeg",
    // [TODO: Replace with South Fork chimney repair photo]
    description:
      "Cracked crowns, spalling brick, failed flashing, and creosote buildup are all safety and structural issues. Our chimney specialists inspect, clean, and repair chimney systems to keep your fireplace safe and your home watertight.",
    learnHref: "/craft-catalog/chimney-repair-cleaning",
    steps: [
      { label: "Inspect", body: "We assess the crown, flashing, mortar joints, liner, and flue for damage or buildup." },
      { label: "Free Estimate", body: "Written quote before any work begins." },
      { label: "Clean & Repair", body: "We clean the flue and address structural issues — crown repair, repointing, flashing replacement — as needed." },
      { label: "Final Check", body: "We confirm the chimney is safe, clean, and properly sealed before leaving." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Roof Replacement",
    image: "/images/IMG_31181.jpeg",
    // [TODO: Replace with South Fork full roof replacement photo]
    description:
      "When repair no longer makes financial sense, South Fork Roofing and Chimney handles full tear-offs and new roof installations. We offer lifetime warranty shingles and back every installation with our workmanship warranty.",
    learnHref: "/craft-catalog/roof-replacement",
    steps: [
      { label: "Free Inspection", body: "We document existing conditions and give you an honest assessment — repair vs. replacement." },
      { label: "Written Estimate", body: "Detailed quote broken down by material and labor before we begin." },
      { label: "Full Tear-Off & Install", body: "We strip the old roof, inspect the decking, and install the new system. Most residential jobs take 1–2 days." },
      { label: "Cleanup & Walkthrough", body: "All debris hauled away. We inspect the finished roof with you before closing out." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Siding & Gutters",
    image: "/images/IMG_31181.jpeg",
    // [TODO: Replace with South Fork siding or gutters job photo]
    description:
      "South Fork Roofing and Chimney installs and repairs siding and gutters for residential and commercial properties throughout Long Island. We protect your full exterior — from roof edge to foundation line.",
    learnHref: "/craft-catalog/siding",
    steps: [
      { label: "Inspect", body: "We assess the full exterior — siding panels, fascia boards, gutters, and downspout routing." },
      { label: "Free Estimate", body: "Written quote before any work begins." },
      { label: "Install or Repair", body: "We address damage at the source and install with proper flashing, fastening, and drainage design." },
      { label: "Final Walkthrough", body: "We verify the finished installation and haul away all material debris." },
    ] as AccordionStep[],
  },
];
