import data from "../data/data.json";
import Country from "./Country";
interface Props {
  inputValue: string;
}
const Grid = ({ inputValue }: Props) => {
  const filteredItems = inputValue
    ? data.filter((d) => {
        return d.name.toLowerCase().includes(inputValue.toLowerCase());
      })
    : data;

  if (filteredItems.length === 0)
    return (
      <p style={{ textAlign: "center" }}>
        No result for <b style={{ fontWeight: "bold" }}>"{inputValue}"</b>
      </p>
    );
  return (
    <div id="grid">
      {filteredItems.map((country) => (
        <Country
          key={country.name}
          img={country.flags.png}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital || ""}
        />
      ))}
    </div>
  );
};

export default Grid;
