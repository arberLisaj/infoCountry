import { useState } from "react";
import Header from "./components/Header";
import "./styles/styles.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={(data) => setDarkMode(data)} />
    </main>
  );
};

export default App;
