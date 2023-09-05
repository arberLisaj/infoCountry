import { useNavigate, useParams } from "react-router-dom";
import countries from "./data/data.json";
import { useEffect } from "react";

const InfoPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const country = countries.filter((c) => c.name === params.name)[0];
  const navigateHome = (e: KeyboardEvent) => {
    if (e.key == "Escape") navigate("/");
  };
  useEffect(() => {
    document.addEventListener("keydown", navigateHome);
    return () => document.removeEventListener("keydown", navigateHome);
  }, []);
  return (
    <div id="infoPage">
      <header>
        <button title="back" onClick={() => navigate("/")}>
          back
        </button>
      </header>
      <div>
        <img src={country.flag} alt="country flag" />
        <h1>{country.name}</h1>
        <p>
          Native name: <span>{country.nativeName}</span>
        </p>
        <p>
          Language : <span>{country.languages[0].name}</span>
        </p>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
        {country.currencies && (
          <p>
            Currency: <span>{country?.currencies[0].name}</span>
          </p>
        )}
        <p>
          Area: <span>{country.area}</span>
        </p>
        <p>
          Demonym: <span>{country.demonym}</span>
        </p>
        <p>
          Dialling code: <span>+{country.callingCodes[0]}</span>
        </p>
        <p>
          Domain: <span>{country.topLevelDomain}</span>
        </p>
        <p>
          Time zone: <span>{country.timezones[0]}</span>
        </p>
        <p>
          Population: <span>{country.population}</span>
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
