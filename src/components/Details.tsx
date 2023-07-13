import { BsArrowLeftShort } from "react-icons/bs";

interface Props {
  state: boolean;
  setState: (data: boolean) => void;
  // getting the data props
  img: string;
  title: string;
  nativeName: string;
  population: string;
  region: string;
  subRegion: string;
  capital: string | undefined;
  domain: string[];
  languages: string[];
  denonym: string;
  diallingCode: string[];
  timeZone: string[];
  area: string | undefined;
  currency: string[] | undefined;
  borderCountries: string[] | undefined;
}

const Details = ({
  state,
  setState,
  img,
  title,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  domain,
  languages,
  denonym,
  diallingCode,
  timeZone,
  area,
  currency,
  borderCountries,
}: Props) => {
  return (
    <section
      className={state ? "show tint" : "hide tint"}
      onClick={() => setState(false)}
    >
      <section id="description">
        <button onClick={() => setState(false)}>
          <BsArrowLeftShort size="20" />
          Back
        </button>
        <img src={img} alt="country flag" />

        <section className="content" onClick={(e) => e.stopPropagation()}>
          <h1>{title}</h1>
          <ul className="grid">
            <li>
              Native name: <span>{nativeName}</span>
            </li>
            <li>
              Population: <span>{population}</span>
            </li>
            <li>
              Region: <span>{region}</span>
            </li>
            <li>
              SubRegion: <span>{subRegion}</span>
            </li>
            <li>
              Capital: <span> {capital}</span>
            </li>
            <li>
              Currency: <span>{currency}</span>
            </li>
            <li>
              Area:
              <span>
                {area}km<sup>2</sup>
              </span>
            </li>
            <li>
              Denonym: <span>{denonym}</span>
            </li>
            <li>
              Dialling-Code: <span>{diallingCode}</span>
            </li>
            <li>
              TimeZone <span>{timeZone}</span>
            </li>
            <li className="domain">
              Domain:
              {domain.map((d, index) => (
                <p key={index}>
                  <span>{d}</span>
                </p>
              ))}
            </li>
            <li>
              Languages:
              <span>{languages}</span>
            </li>
          </ul>

          <ul className="borders">
            <p>Border Countries:</p>
            {borderCountries ? (
              borderCountries.map((c, index) => <li key={index}>{c}</li>)
            ) : (
              <span>No information</span>
            )}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Details;
