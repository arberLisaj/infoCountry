import Card from "./Card";
import data from "../data.json";

interface Props {
  choosenOption: string;
}
const CountriesGrid = ({ choosenOption }: Props) => {
  const filteredCountriesArray = choosenOption
    ? data.filter((e) => e.region === choosenOption)
    : data;
  return (
    <section id="countriesGrid">
      {filteredCountriesArray.map((e, index) => (
        <Card
          key={index}
          image={e.flag}
          title={e.name}
          population={e.population.toLocaleString("en-US")}
          region={e.region}
          capital={e.capital}
        />
      ))}
    </section>
  );
};

export default CountriesGrid;
