export const addToFavorites = data => dispatch =>
  dispatch({
    type: "ADD_FAVORITE",
    payload: data
  });
