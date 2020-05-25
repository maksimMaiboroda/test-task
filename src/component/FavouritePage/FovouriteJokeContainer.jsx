import React from "react";
import { connect } from "react-redux";
import Joke from "../Joke/Joke";
import { toFovourites } from "../../redux/actions/actions";
import classes from "./FavouritePage.module.scss";

class FovouriteJokeContainer extends React.Component {
  componentDidMount() {}

  render() {
    return this.props.favouriteJoke.map((joke) => {
      return (
        <div className={classes.wrapperFavouriteJoke}>
          <Joke {...this.props} joke={joke} key={joke.id} />
        </div>
      );
    });
  }
}

let mapStateToProps = (state) => ({
  favouriteJoke: state.jokes.favouriteJoke,
});

export default connect(mapStateToProps, { toFovourites })(
  FovouriteJokeContainer
);
