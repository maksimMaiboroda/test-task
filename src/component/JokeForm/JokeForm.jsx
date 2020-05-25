import React from "react";
import classes from "./JokeForm.module.scss";
import { reduxForm, Field } from "redux-form";

let JokeForm = ({ handleSubmit,/*  formCompleted, disabledForm, isDisabledForm  */}) => {
  
  /* if (formCompleted === true) {
    isDisabledForm(true);
  } else {
    isDisabledForm(false);
  } */

  return (
    <form onSubmit={handleSubmit} className={classes.jokeForm}>
      <div className={classes.randomOrNot}>
        <label className={classes.randomLabel}>
          <Field
            className={classes.randomCheckbox}
            name="categorySelection"
            component="input"
            type="radio"
            value="random"
          />
          <span className={classes.fakeRandom}></span>
          <span>Random</span>
        </label>

        <label className={classes.randomLabel}>
          <Field
            className={classes.randomCheckbox}
            name="categorySelection"
            component="input"
            type="radio"
            value="fromCaterogies"
          />
          <span className={classes.fakeRandom}></span>
          <span>From caterogies</span>
        </label>

        <label className={classes.randomLabel}>
          <Field
            className={classes.randomCheckbox}
            id="searchCheckbox"
            name="categorySelection"
            component="input"
            type="radio"
            value="search"
          />
          <span className={classes.fakeRandom}></span>
          <span>Search</span>
        </label>

        <label className={classes.searchLabel}>
          <Field
            className={classes.searchInput}
            id="searchInputCheckbox"
            name="search"
            component="input"
            type="input"
            value="Введите запрос для поиска по шуткам..."
          />
        </label>
      </div>

      <div className={classes.categories}>
        <label className={classes.categoriesWrapp}>
          <Field
            className={classes.categoriesCheckbox}
            name="caterogies"
            component="input"
            type="radio"
            value="animal"
          />
          <span className={classes.categoriesText}>animal</span>
        </label>
        <label className={classes.categoriesWrapp}>
          <Field
            className={classes.categoriesCheckbox}
            name="caterogies"
            component="input"
            type="radio"
            value="career"
          />
          <span className={classes.categoriesText}>career</span>
        </label>
        <label className={classes.categoriesWrapp}>
          <Field
            className={classes.categoriesCheckbox}
            name="caterogies"
            component="input"
            type="radio"
            value="celebrity"
          />
          <span className={classes.categoriesText}>celebrity</span>
        </label>
        <label className={classes.categoriesWrapp}>
          <Field
            className={classes.categoriesCheckbox}
            name="caterogies"
            component="input"
            type="radio"
            value="dev"
          />
          <span className={classes.categoriesText}>dev</span>
        </label>
      </div>

      <button type="submit" className={classes.btnFormSubmit}>
        Get a joke
      </button>
    </form>
  );
};

export default reduxForm({
  form: "jokeInit",
})(JokeForm);
