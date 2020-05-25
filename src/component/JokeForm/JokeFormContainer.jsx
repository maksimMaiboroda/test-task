import React from "react";
import { connect } from "react-redux";
import {
  getJokeRandom,
  getJokeCategory,
  searchJoke /* isFormFilled, isDisabledForm */,
} from "../../redux/actions/actions";
import JokeForm from "./JokeForm";

const JokeFormContainer = (props) => {
  const onSubmit = ({ categorySelection, caterogies, search }) => {
    if (categorySelection === "random") {
      props.getJokeRandom();
    } else if (categorySelection === "search") {
      console.log(`Выполнить запрос на сервер с ${search}`);
      props.searchJoke(search)
    } else if (caterogies === undefined || categorySelection === undefined) {
      console.log("Виберете категорию шуток!");
      console.log(search);
      console.log(caterogies);
      console.log(categorySelection);
    } else if (
      categorySelection === "fromCaterogies" &&
      caterogies !== undefined
    ) {
      console.log(
        `categorySelection: ${categorySelection}`,
        `caterogies: ${caterogies}`
      );
      props.getJokeCategory(caterogies);
    }
  };

  /* if (props.categorySelection === "fromCaterogies") {
    props.isFormFilled();
  } */

  return <JokeForm onSubmit={onSubmit} {...props} />;
};

let mapStateToProps = (state) => ({
  formCompleted: state.jokes.formCompleted,

  /* disabledForm: state.jokes.formCompleted,

  caterogies: state.form.caterogies,
  categorySelection: state.form.categorySelection, */
});

export default connect(mapStateToProps, {
  getJokeRandom,
  getJokeCategory,
  searchJoke /*  isFormFilled, isDisabledForm */,
})(JokeFormContainer);
