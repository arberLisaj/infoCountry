import { BsFillMoonFill, BsMoon } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}
const Header = ({ darkMode, setDarkMode }: Props) => {
  return (
    <section className="header-wrapper">
      <header>
        <h1>Where in the world? </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsFillMoonFill /> : <BsMoon />}
          <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
        </button>
      </header>
    </section>
  );
};

export default Header;
