import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";

export default function Homepage () {
    const [currency, setCurrency] = useState("eur");
    const [countries, setCountries] = useState([]);
    const [currencyList, setCurrencyList] = useState([]);

    useEffect(() => {
      const fetchCountries = async () => {
        const data = await fetch(
          `https://restcountries.com/v3.1/currency/${currency}`
        );
        const newCountriesList = await data.json();
        setCountries(newCountriesList);
      };

      fetchCountries();
    }, [currency]);

    useEffect(() => {
      const fetchCurrenciesList = async () => {
        const data = await fetch(
          "https://restcountries.com/v3.1/all?fields=currencies"
        );
        const newCurrenciesList = await data.json();

        setCurrencyList(newCurrenciesList);
      };

      fetchCurrenciesList();
    }, []);

    return (
      <div className="page-wrapper page-wrapper--align-center">
        <h1>Search Countries</h1>
        <div className="select-wrapper">
          <select className="select"
            onChange={(event) => {
              setCurrency(event.target.value);
            }}
          >
            {currencyList.map((currency, index) => {
              const currencies = Object.keys(currency.currencies);
              return (
                <option value={currencies[0]} key={index + "-" + currencies[0]}>
                  {currency.currencies?.[currencies?.[0]]?.name}{" "}
                </option>
              );
            })}
          </select>
        </div>

        <div className="grid-4">
          {countries.map((country) => {
            return (
              <Link to={`/country/${country.name.common}`} key={country.cca3}>
                <CountryCard
                  flag={country.flags.png}
                  name={country.name.common}
                  capital={country.capital}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
}