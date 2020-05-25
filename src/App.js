import React from "react";
import JokeContainer from "./component/Joke/JokeContainer";
import JokeGenerationPage from "./component/JokeGenerationPage/JokeGenerationPage";
import FavouritePage from "./component/FavouritePage/FavouritePage";

import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.wrapperApp}>
      <div className={classes.leftContentPage}>
        <JokeGenerationPage />
      </div>
      <div className={classes.rightContentPage}>
        <FavouritePage />
      </div>
    </div>
  );
}

export default App;
