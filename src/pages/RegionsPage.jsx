import { Link } from "react-router";
import RegionCard from "../components/RegionCard";

export default function RegionsPage() {

    const regions = [
      "Africa",
      "Americas",
      "Asia",
      "Europe",
      "Oceania",
      "Antarctic",
    ];

    return (
      <div className="page-wrapper page-wrapper--align-center">
        <div className="grid-4">
          {regions.map((region) => {
            return (
              <Link to={`/region/${region}`} key={region.indexOf(region)}>
                <RegionCard name={region} />
              </Link>
            );
          })}
        </div>
      </div>
    );
}
