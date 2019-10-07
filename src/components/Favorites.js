import React from "react";

// Redux
import { connect } from "react-redux";
import { removeFromFavorites } from "../redux/actions/weatherActions";

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="favorites">
      {favorites && (
        <ul>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              {favorite.city}{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => removeFromFavorites(favorite.id)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = ({ weatherReducer: { favorites } }) => ({
  favorites
});

export default connect(
  mapStateToProps,
  { removeFromFavorites }
)(Favorites);
