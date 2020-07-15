import React, { useEffect } from "react";
import axios from "axios";
import SuperHeroes from "./components/SuperHeroes";
import Alert from "./components/Alert";
import Search from "./components/Search";
import { useSemiPersistentState } from "./utilHooks/persistantState";
import "./App.css";

const API_ENDPOINT = `http://157.245.138.232:9091/api/v1/test/superheroes/?puedeVolar =true`;

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");

  const heroesReducer = (state, action) => {
    switch (action.type) {
      case "HEROES_FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
          msg: "",
        };
      case "HEROES_FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
          msg: "",
        };
      case "HEROES_FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
          msg: "",
        };

      case "HEROES_SEARCH":
        return {
          ...state,
          data: state.data.filter((item) =>
            item.nombre.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      default:
        return state;
    }
  };

  const [heroes, dispatchHeroes] = React.useReducer(heroesReducer, {
    data: [],
    isLoading: false,
    isError: false,
    msg: "",
  });

  const handleFetchHeroes = React.useCallback(async () => {
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
