import {
  TO_RANDOM_JOKE,
  TO_FOVOURITES,
  REMOVE_FOVOURITES,
} from "../types/types";

let initialState = {
  jokeData: [
    {
      categories: [],
      created_at: "2020-01-05 13:42:30.177068",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "o16jANriQFaew2tsf5Mj3w",
      updated_at: "2020-01-05 13:42:30.177068",
      url: "https://api.chucknorris.io/jokes/o16jANriQFaew2tsf5Mj3w",
      value:
        "If a black cat crosses your path, you have bad luck. If Chuck Norris crosses your path, it was nice knowing you.",
    },
  ],
  formCompleted: false,
  disabledForm: true,
  favouriteJoke: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TO_RANDOM_JOKE:
      return {
        ...state,
        jokeData: [action.payload],
      };
    case TO_FOVOURITES:
      return {
        ...state,
        favouriteJoke: [...state.favouriteJoke, ...state.jokeData],
      };
    case REMOVE_FOVOURITES:
      return {
        ...state,
        favouriteJoke: state.favouriteJoke.filter(
          (o) => o.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
