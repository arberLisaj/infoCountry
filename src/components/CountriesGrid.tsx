import Card from "./Card";
import data from "../data.json";

const CountriesGrid = () => {
  const slicedArray = data.slice(0, 40);
  return (
    <section id="countriesGrid">
      {slicedArray.map((e, index) => (
        <Card
          key={index}
          image={e.flag}
          title={e.name}
          population={e.population}
          region={e.region}
          capital={e.capital}
        />
      ))}
    </section>
  );
};

export default CountriesGrid;
