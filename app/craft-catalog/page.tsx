import CraftCatalogHero from "@/components/custom/craft-catalog/CraftCatalogHero";
import CraftCatalogClient from "@/components/custom/craft-catalog/CraftCatalogClient";

export const metadata = {
  title: "Our Services — Roofing, Chimney & Exterior",
  description:
    "South Fork Roofing and Chimney provides roof repair, replacement, chimney repair, siding, skylights, and gutters across The Hamptons and Long Island. Free estimates.",
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftCatalogHero />
      <CraftCatalogClient />
    </main>
  );
}
