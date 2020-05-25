import React from "react";
import classes from "./FavouritePage.module.scss";
import FovouriteJokeContainer from "./FovouriteJokeContainer";
import classNames from "classnames";

const FavouritePage = () => {
  return (
    <div className={classes.favouritePage}>
      <h1 className={classes.title}>
        <span>Favourite</span>
      </h1>

      <div className={classes.jokeComponentWrapper}>
        <FovouriteJokeContainer
          fontSizeText={"14px"}
          backgroundColorText={"#fff"}
          backgroundColor={"8ea7ff"}
        />
      </div>
    </div>
  );
};

export default FavouritePage;
