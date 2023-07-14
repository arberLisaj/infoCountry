import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  setData: (something: string) => void;
  setInputValue: (something: string) => void;
}
const FilterCountries = ({ setData, setInputValue }: Props) => {
  return (
    <section id="filter">
      <section className="inputBox">
        <span>
          <AiOutlineSearch />
        </span>
        <input
          id="search"
          name="search"
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search for a country..."
        />
      </section>
      <select onChange={(option) => setData(option.target.value)}>
        <option value="">All Regions</option>
        <option value="Africa">africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default FilterCountries;
