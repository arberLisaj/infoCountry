import { BsSearch } from "react-icons/bs";

const Filter = () => {
  return (
    <div id="filter">
      <div>
        <BsSearch size="15px" />
        <input type="text" placeholder="Search for a country..." />
      </div>
    </div>
  );
};

export default Filter;
