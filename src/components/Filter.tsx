import { BsSearch } from "react-icons/bs";

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Filter = ({ inputValue, setInputValue }: Props) => {
  return (
    <div id="filter">
      <div>
        <BsSearch size="15px" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="search"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};

export default Filter;
