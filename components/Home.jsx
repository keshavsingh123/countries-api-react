import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import Loading from "./Loading";
import useTheme from "../custom-hooks/useTheme";
// import { useOutletContext } from 'react-router-dom'
function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useOutletContext()
  const [isDark] = useTheme()  //custom hook
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      {query === "mount" ? <Loading /> : <CountriesList query={query} />}
      
    </main>
  );
}

export default Home;
