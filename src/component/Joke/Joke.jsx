import React from "react";
import clases from "./Joke.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import jokeIconStatic from "../../assets/img/jokeIconStatic.svg";

const JokeComponent = ({
  joke,
  fontSizeText,
  toFovourites,
  backgroundColorText,
  backgroundColor,
}) => {
  return (
    <div className={clases.jokeWrapper}>
      <div
        className={clases.jokeContainer}
        style={{ background: `${backgroundColorText}` }}
      >
        <div className={clases.jokeIcon}>
          <span style={{ backgroundColor: `${backgroundColor}` }}>
            <img src={jokeIconStatic} alt="" />
          </span>
        </div>

        <div className={clases.jokeContent}>
          <div className={clases.jokeHead}>
            <div className={clases.idLinkToJoke}>
              <span>ID: </span>
              <span className={clases.idLinkIcon}>
                <a href="https://www.google.com.ua/">{joke.id} </a>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </span>
            </div>
          </div>
          <div
            style={{ fontSize: `${fontSizeText}` }}
            className={clases.jokeText}
          >
            <p>{joke.value}</p>
          </div>
          <div className={clases.jokeFooter}>
            <p className={clases.timeFromUpdated}>{joke.updated_at}</p>
          </div>

          <div className={clases.btnCelebrityMobileWrapp}>
            <button
              style={{ backgroundColor: `${backgroundColor}` }}
              className={clases.btnCelebrityMobile}
            >
              {joke.categories.length > 0 ? joke.categories : "CATEGORIES"}
            </button>
          </div>
        </div>

        <div className={clases.btnColumn}>
          <FontAwesomeIcon
            className={clases.btnLike}
            icon={faHeart}
            onClick={toFovourites.bind(this, joke.id)}
          />
          <button
            style={{ backgroundColor: `${backgroundColor}` }}
            className={clases.btnCelebrity}
          >
            {joke.categories.length > 0 ? joke.categories : "CATEGORIES"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokeComponent;
