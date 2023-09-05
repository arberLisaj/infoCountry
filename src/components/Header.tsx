import { BsMoon, BsSun } from "react-icons/bs";
import useLocalStorage from "../hooks/useLocalStorage";

const Header = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "");
  return (
    <header id="websiteHeader">
      <div>
        <h1>Where in the world?</h1>
        <button title="dark mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </header>
  );
};
export default Header;
