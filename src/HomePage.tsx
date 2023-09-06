import { useState } from "react";
import Filter from "./components/Filter";
import Grid from "./components/Grid";
import Header from "./components/Header";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div id="Grid" style={{ minHeight: "100vh", padding: "5px" }}>
      <Header />
      <Filter
        inputValue={inputValue}
        setInputValue={(value) => setInputValue(value)}
      />
      <Grid inputValue={inputValue} />
    </div>
  );
};

export default HomePage;
