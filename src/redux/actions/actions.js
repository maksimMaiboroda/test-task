import { TO_RANDOM_JOKE, TO_FOVOURITES, REMOVE_FOVOURITES } from "../types/types";
import { jokeAPI } from "../../api/api";

export const addJokeToList = (joke) => ({
  type: TO_RANDOM_JOKE,
  payload: joke,
});
export const toFovourites = (id) => ({ type: TO_FOVOURITES, payload: id  });
export const removeFovourites = (id) => ({ type: REMOVE_FOVOURITES, payload: id });

export const getJokeRandom = () => {
  return async (dispatch) => {
    const data = await jokeAPI.getRandomJoke();
    dispatch(addJokeToList(data.data));
  };
};

export const getJokeCategory = (caterogies) => {
  return async (dispatch) => {
    const data = await jokeAPI.getCategoryJoke(caterogies);
    dispatch(addJokeToList(data.data));
  };
};

export const searchJoke = (searchText) => {
  debugger;
  return async (dispatch) => {
    const data = await jokeAPI.searchToJoke(searchText);
    dispatch(addJokeToList(data.data.result[0]));
  };
};

export const addJokeFavourite = (joke) => {
  return async (dispatch) => {
    await jokeAPI.putJokeFavourite(joke);
  };
};
