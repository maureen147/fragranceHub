import { useState, createContext, useContext, useEffect } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [values, setValues] = useState({
    keyword: "",
    results: [],
  });

  
const bacToTop = () => {
  window.scrollTo(0, 0);
}

  return (
    <SearchContext.Provider value={[values, setValues, bacToTop]}>
      {children}
    </SearchContext.Provider>
  );
};
// hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
