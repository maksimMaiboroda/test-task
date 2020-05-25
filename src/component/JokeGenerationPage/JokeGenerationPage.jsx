import React from "react";
import classes from "./JokeGenerationPage.module.scss";
import JokeFormContainer from "../JokeForm/JokeFormContainer";
import JokeContainer from "../Joke/JokeContainer";

const JokeGenerationPage = () => {
  return (
    <div className={classes.jokeGenerationPage}>
      <div className={classes.jokePageContainer}>
        <h2 className={classes.titleMsi}>MSI 2020</h2>
        <h1 className={classes.welcome}>Hey!</h1>
        <h2 className={classes.pageText}>Let’s try to find a joke for you:</h2>
        <JokeFormContainer />
        <div className={classes.jokeComponentWrapper}>
          <JokeContainer fontSizeText={"18px"} backgroundColor={"#fff"}/>
        </div>
      </div>
    </div>
  );
};

export default JokeGenerationPage;
