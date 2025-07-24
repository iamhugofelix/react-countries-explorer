import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BorderCountries from "../components/BorderCountries";

function CountryDetailPage() {
  const { name } = useParams();
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      const countryData = await data.json();
      setCountryInfo(countryData[0]);
    };

    fetchCountry();
  }, [name]);

  console.log("Country info:", countryInfo);
  console.log("Country border:", countryInfo.borders);

  const hasInfo = !!Object.keys(countryInfo).length;

  return (
    <>
      <div className="page-wrapper">
        {hasInfo && (
          <>
            <div className="country-header">
              <h1>{countryInfo.name.common} Detail Page</h1>
              <img src={countryInfo.flags.png} alt={name} />
            </div>
            <div className="country-data">
              <h2>Country information:</h2>
              <p>
                <strong>Capital:</strong> {countryInfo.capital}
              </p>
              <p>
                <strong>Currency:</strong> {Object.keys(countryInfo.currencies)}
              </p>
              <p>
                <strong>Region:</strong> {countryInfo.region}
              </p>
              <p>
                <strong>Population:</strong> {countryInfo.population}
              </p>
            </div>
            <BorderCountries countryCodes={countryInfo.borders} />
          </>
        )}
      </div>
    </>
  );
}

export default CountryDetailPage;
