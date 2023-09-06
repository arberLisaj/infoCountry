import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import countries from "./data/data.json";
import formatThousands from "./utils/formatThousands";

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
  const formatedPopulation = formatThousands(country.population);
  return (
    <div id="infoPage">
      <div className="wrapper">
        <header>
          <button title="back" onClick={() => navigate("/")}>
            back
          </button>
        </header>
        <div>
          <img src={country.flag} alt="country flag" />
          <h1>{country.name}</h1>
          <ul>
            <li>
              Native name: <span>{country.nativeName}</span>
            </li>
            <li>
              Language : <span>{country.languages[0].name}</span>
            </li>
            <li>
              Population: <span>{formatedPopulation}</span>
            </li>
            <li>
              Capital: <span>{country.capital}</span>
            </li>
            {country.currencies && (
              <li>
                Currency: <span>{country?.currencies[0].name}</span>
              </li>
            )}
            <li>
              Area: <span>{country.area}</span>
            </li>
            <li>
              Demonym: <span>{country.demonym}</span>
            </li>
            <li>
              Dialling code: <span>+{country.callingCodes[0]}</span>
            </li>
            <li>
              Domain: <span>{country.topLevelDomain}</span>
            </li>
            <li>
              Time zone: <span>{country.timezones[0]}</span>
            </li>
            <li>
              Population: <span>{country.population}</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
