import React from "react";
import { connect } from "react-redux";
import Joke from "../Joke/Joke";
import { removeFovourites as toFovourites } from "../../redux/actions/actions";
import classes from "./FavouritePage.module.scss";
import uniqBy from "lodash/uniqBy";

const FovouriteJokeContainer = (props) => {
  return props.favouriteJoke.map((joke) => {
    return (
      <div className={classes.wrapperFavouriteJoke}>
        <Joke {...props} joke={joke} key={joke.id} />
      </div>
    );
  });
};

let mapStateToProps = (state) => ({
  favouriteJoke: uniqBy(state.jokes.favouriteJoke, (o) => o.id),
});

export default connect(mapStateToProps, { toFovourites })(
  FovouriteJokeContainer
);
