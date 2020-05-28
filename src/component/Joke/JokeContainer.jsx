import React from "react";
import { connect } from "react-redux";
import Joke from "./Joke";
import { toFovourites } from "../../redux/actions/actions";
import heartTransparent from "../../assets/img/heartTransparent.svg";

class JokeContainer extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return this.props.jokeData.map((joke) => {
      return <Joke {...this.props} joke={joke} key={joke.id} heartIcon={heartTransparent} />;
    });
  }
}

let mapStateToProps = (state) => ({
  jokeData: state.jokes.jokeData,
  categories: state.form.categories,
});

export default connect(mapStateToProps, { toFovourites })(JokeContainer);
