import {
  TO_RANDOM_JOKE,
  IS_FORM_FILLED,
  IS_FORM_DISABLED,
  TO_FOVOURITES,
} from "../types/types";
import { jokeAPI } from "../../api/api";

export const addJokeToList = (joke) => ({
  type: TO_RANDOM_JOKE,
  payload: joke,
});
export const toFovourites = () => ({ type: TO_FOVOURITES });
/* export const isFormFilled = () => ({type: IS_FORM_FILLED})
export const isDisabledForm = (status) => ({type: IS_FORM_DISABLED, payload: status}) */

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
  debugger
  return async (dispatch) => {
    const data = await jokeAPI.searchToJoke(searchText);
    dispatch(addJokeToList(data.data.result[0]));
  };
};

export const addJokeFavourite = (joke) => {
  return async (dispatch) => {
    const response = await jokeAPI.putJokeFavourite(joke);
  };
};
