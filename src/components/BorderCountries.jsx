import { useEffect, useState } from "react";
import { Link } from "react-router";
import SimpleCard from "./SimpleCard";

export default function BorderCountries({ countryCodes }) {
  const [borderCountriesList, setBorderCountriesList] = useState([]);

  useEffect(() => {
    const fetchCountriesBorders = async () => {
      const data = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${countryCodes.join(
          ","
        )}&fields=cca3,name`
      );
      const countriesBorderData = await data.json();
      setBorderCountriesList(countriesBorderData);
    };

    fetchCountriesBorders(borderCountriesList);
  }, [countryCodes]);

  return (
    <SimpleCard>
      <h3>Border Countries</h3>
      <div>
        {borderCountriesList.map((i) => {
          return (
            <Link to={`/country/${i.name.common}`}>
              <h2>{i.name.common}</h2>
            </Link>
          );
        })}
      </div>
    </SimpleCard>
  );
}
