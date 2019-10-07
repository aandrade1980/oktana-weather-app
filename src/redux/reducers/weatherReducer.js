const initialState = {
  favorites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const indexCity = state.favorites.find(
        weather => weather.id === action.payload.id
      );

      if (indexCity) {
        return state;
      }

      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};
