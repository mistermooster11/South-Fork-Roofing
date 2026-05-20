export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const CATEGORIES = ["Roofing", "Chimney", "Exterior"] as const;
export const DISCIPLINES = ["Residential", "Commercial", "Industrial"] as const;

export const crafts: CraftItem[] = [
  {
    slug: "roof-repair",
    title: "Roof Repair",
    categories: ["Roofing"],
    disciplines: ["Residential", "Commercial", "Industrial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement & Installation",
    categories: ["Roofing"],
    disciplines: ["Residential", "Commercial", "Industrial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "flat-roofing",
    title: "Flat Roofing",
    categories: ["Roofing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "emergency-roof-repair",
    title: "Emergency Roof Repair",
    categories: ["Roofing"],
    disciplines: ["Residential", "Commercial", "Industrial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "chimney-repair-cleaning",
    title: "Chimney Repair & Cleaning",
    categories: ["Chimney"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "chimney-rebuild",
    title: "Chimney Rebuild",
    categories: ["Chimney"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "siding",
    title: "Siding Installation & Repair",
    categories: ["Exterior"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "skylights",
    title: "Skylight Installation & Repair",
    categories: ["Exterior"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "gutters",
    title: "Gutter Installation & Repair",
    categories: ["Exterior"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
];
