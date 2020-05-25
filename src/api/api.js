import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: `https://api.chucknorris.io/jokes/`,
});

export const jokeAPI = {
  getRandomJoke() {
    return instanse.get(`random`);
    /* .then(response => response.data); */
  },
  getCategoryJoke(category) {
    return instanse.get(`random?category=${category}`);
    /* .then(response => response.data); */
  },
  putJokeFavourite(joke){
    return axios.put("/data/FavouriteJokeData.json", { joke: joke });
  },
  searchToJoke(searchText){
    return instanse.get(`/search?query=${searchText}`);
  }
};
