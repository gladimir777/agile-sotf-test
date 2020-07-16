export const heroesReducer = (state, action) => {
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
        data: [],
        isLoading: false,
        isError: true,
        msg: "",
      };

    case "HEROES_SEARCH":
      const t = state.data.filter((item) =>
        item.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        data: t,
      };
    default:
      return state;
  }
};
