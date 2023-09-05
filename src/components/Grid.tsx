import data from "../data/data.json";
import Country from "./Country";

const Grid = () => {
  return (
    <div id="grid">
      {data.map((country) => (
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
