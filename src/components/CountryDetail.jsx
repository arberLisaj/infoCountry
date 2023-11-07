import React, { useEffect } from "react";
import countries from "../data.json";

function CountryDetail({ handleClick, name }) {
  const country = countries.filter((c) => c.name === name)[0];
  function handleEscKey(e) {
    if (e.key === "Escape") handleClick();
  }
  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <section
      onClick={handleClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#333a",
        display: "grid",
        placeContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
        }}
      >
        <img src={country.flag} alt="country flag" />
      </div>
    </section>
  );
}

export default CountryDetail;
