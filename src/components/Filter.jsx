import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Filter({ inputValue, setInputValue, region, setRegion }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1200px",
        marginInline: "auto",
        paddingBlock: "15px",
      }}
    >
      <div
        className="inputGroup"
        style={{
          display: "flex",
          border: "1px solid gainsboro",
          alignItems: "center",
          gap: "5px",
          padding: "0px 10px",
          borderRadius: "4px",
        }}
      >
        <AiOutlineSearch />
        <input
          type="search"
          name="searchbar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search a country..."
          style={{
            border: "none",
            padding: "7px 3px",
          }}
        />
      </div>
      <select
        style={{
          border: "1px solid gainsboro",
          backgroundColor: "transparent",
          borderRadius: "4px",
          cursor: "pointer",
          paddingInline: "10px",
        }}
        name="regions"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">Region</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  );
}
export default Filter;
