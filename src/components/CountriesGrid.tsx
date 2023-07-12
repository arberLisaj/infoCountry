import Card from "./Card";
import data from "../data.json";

interface Props {
  choosenOption: string;
  inputValue: string;
}
const CountriesGrid = ({ choosenOption, inputValue }: Props) => {
  // Filter by Region
  const filteredCountriesArray = choosenOption
    ? data.filter((e) => e.region === choosenOption)
    : data;

  // Search with Searchbar
  const filteredItems = inputValue
    ? data.filter((question) => {
        return question.name.toLowerCase().includes(inputValue.toLowerCase());
      })
    : filteredCountriesArray;

  // console.log(filteredItems);

  return (
    <section id="countriesGrid">
      {filteredItems.map((e, index) => (
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
