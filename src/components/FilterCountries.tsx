import { AiOutlineSearch } from "react-icons/ai";

const FilterCountries = () => {
  return (
    <section id="filter">
      <div className="inputBox">
        <span>
          <AiOutlineSearch />
        </span>
        <input type="text" placeholder="Search for a country..." />
      </div>
      <select>
        <option value="">Filter by Region</option>
        <option value="africa">africa</option>
        <option value="america">america</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
};

export default FilterCountries;
