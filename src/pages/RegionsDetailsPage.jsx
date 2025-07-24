import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CountryCard from "../components/CountryCard.jsx";

function RegionDetailsPage() {
  const { name } = useParams();
  const [regionsCountries, setRegionsCountries] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch(`https://restcountries.com/v3.1/region/${name}`);
      const countriesList = await data.json();
      setRegionsCountries(countriesList);
    };

    fetchCountries();
  }, []);

  console.log("regionsCountries", regionsCountries);

  const hasInfo = !!Object.keys(regionsCountries).length;

  return (
    <>
      <div className="page-wrapper page-wrapper--align-center">
        <h1>{name}'s countries</h1>
        <br />
        <div className="grid-4">
          {hasInfo &&
            regionsCountries.map((country) => {
              return (
                <Link to={`/country/${country.name.common}`} key={country.cca3}>
                  <CountryCard
                    flag={country.flags.png}
                    name={country.name.common}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default RegionDetailsPage;
