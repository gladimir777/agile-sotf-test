import React, { useEffect, useCallback } from "react";
import axios from "axios";
import SuperHeroes from "./components/SuperHeroes";
import Alert from "./components/Alert";
import Search from "./components/Search";
import { useSemiPersistentState } from "./utilHooks/persistantState";
import { heroesReducer } from "./components/heroeReducer";
import "./App.css";

const API_ENDPOINT = `http://157.245.138.232:9091/api/v1/test/superheroes/?puedeVolar =true`;

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");

  const [heroes, dispatchHeroes] = React.useReducer(heroesReducer, {
    data: [],
    isLoading: false,
    isError: false,
    msg: "",
  });

  const handleFetchHeroes = useCallback(async () => {
    dispatchHeroes({ type: "HEROES_FETCH_INIT" });

    try {
      const result = await axios.get(API_ENDPOINT);
      dispatchHeroes({
        type: "HEROES_FETCH_SUCCESS",
        payload: result.data.data,
      });
    } catch {
      dispatchHeroes({ type: "HEROES_FETCH_FAILURE" });
    }
  }, []);

  useEffect(() => {
    handleFetchHeroes();
  }, [handleFetchHeroes]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
    dispatchHeroes({ type: "HEROES_SEARCH", payload: event.target.value });
  };

  return (
    <div className="app">
      <Alert error={heroes.isError} msg={heroes.msg} />
      <Search onSearch={handleSearchInput} searchTerm={searchTerm} />
      <SuperHeroes heroes={heroes.data} />
    </div>
  );
}

export default App;
