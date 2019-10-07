export const addToFavorites = data => dispatch =>
  dispatch({
    type: "ADD_FAVORITE",
    payload: data
  });

export const removeFromFavorites = id => dispatch =>
  dispatch({
    type: "REMOVE_FAVORITE",
    payload: id
  });
