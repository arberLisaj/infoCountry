import { useEffect, useState } from "react";
import Details from "./Details";

interface Props {
  image: string;
  title: string;
  population: string;
  region: string;
  capital: string | undefined;
  nativeName: string;
  subRegion: string;
  domain: string[];
  languages: string[];
  denonym: string;
  diallingCode: string[];
  timeZone: string[];
  area: string | undefined;
  currency: string[] | undefined;
  borderCountries: string[] | undefined;
}
const Card = ({
  image,
  title,
  population,
  region,
  capital,
  nativeName,
  subRegion,
  domain,
  languages,
  denonym,
  diallingCode,
  timeZone,
  area,
  currency,
  borderCountries,
}: Props) => {
  const [detailsState, setDetailsState] = useState<boolean>(false);

  // close on esc key 
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetailsState(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);
  return (
    <>
      <article onClick={() => setDetailsState(true)}>
        <img src={image} alt="alt text here" />
        <section className="content">
          <h1>{title}</h1>
          <ul>
            <li>
              Population:<span>{population}</span>
            </li>
            <li>
              Region:<span>{region}</span>
            </li>
            <li>
              Capital:<span>{capital}</span>
            </li>
          </ul>
        </section>
      </article>
      <Details
        state={detailsState}
        setState={(data) => {
          setDetailsState(data);
        }}
        img={image}
        title={title}
        nativeName={nativeName}
        population={population}
        region={region}
        subRegion={subRegion}
        capital={capital}
        domain={domain}
        languages={languages}
        denonym={denonym}
        diallingCode={diallingCode}
        timeZone={timeZone}
        area={area}
        currency={currency}
        borderCountries={borderCountries}
      />
    </>
  );
};

export default Card;
