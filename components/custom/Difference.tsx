import NumberStatsItem from "./NumberStatsItem";
import VapeImage from "./VapeImage";

const stats = [
  {
    stat: "1985",
    label: "Serving The Hamptons & Long Island for 40+ Years",
    linkText: "About Us",
    href: "/explore/southfork-roofing",
  },
  {
    stat: "5★",
    label: "Rated 5 Stars — 52 Verified Google Reviews",
    linkText: "See Our Services",
    href: "/craft-catalog",
  },
  {
    stat: "Free",
    label: "Estimates — Insurance Claims Handled",
    linkText: "Get a Free Estimate",
    href: "/contact-us",
  },
];

export default function Difference() {
  return (
    <div className="front-difference py-20 md:py-48 border-none">
      <div className="inner inner--slim-1172 flex flex-col gap-0 md:gap-10">

        {/* Columns 1 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">

          {/* Left: heading + first stat */}
          <div className="flex-1">
            <div className="sub-heading">Why South Fork Roofing</div>
            <h2 className="h1 mb-[3rem]">
              40+ Years Protecting Hamptons Homes
            </h2>
            <div className="hidden md:flex flex-wrap gap-[3rem] py-[2rem]">
              <NumberStatsItem item={stats[0]} />
            </div>
          </div>

          {/* Right: photo */}
          <div className="w-full md:w-[54%] shrink-0 relative z-20">
            <div className="front-difference__image">
              {/* [TODO: Replace with South Fork Roofing team or job site photo] */}
              <VapeImage src="https://southforkroofingandchimney.com/wp-content/uploads/2023/01/IMG_31181.jpeg" />
            </div>
          </div>

        </div>

        {/* Columns 2: remaining stats */}
        <div className={[
          "flex flex-col justify-center gap-6",
          "md:flex-row md:items-center"
        ].join(" ")}>
          <div className="block md:hidden">
            <NumberStatsItem item={stats[0]} />
          </div>
          {stats.slice(1).map((item) => (
            <NumberStatsItem key={item.stat} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}
