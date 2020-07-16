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
      let text = "";
      if (action.payload.length > 0) {
        text = "No heroe found";
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
        msg: text,
      };

    case "HEROES_FETCH_FAILURE":
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: true,
        msg: "Someting went wrong!",
      };

    case "HEROES_SEARCH":
      const res = state.data.filter((item) =>
        item.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        data: res,
      };
    default:
      return state;
  }
};
