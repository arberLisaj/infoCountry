import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  setData: (something: string) => void;
}
const FilterCountries = ({ setData }: Props) => {
  return (
    <section id="filter">
      <div className="inputBox">
        <span>
          <AiOutlineSearch />
        </span>
        <input type="text" placeholder="Search for a country..." />
      </div>
      <select onChange={(option) => setData(option.target.value)}>
        <option value="">All Regions</option>
        <option value="Africa">africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default FilterCountries;
