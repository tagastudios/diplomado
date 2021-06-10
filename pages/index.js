import React from "react";
import Grid from "../components/Home/Grid";

function Home() {
  return (
    <section className="home__section container">
      <div className="home__left">
        <img src="/img/odarlis.png" alt="OdarlisPerez" />
        <div className="home__text">
          <h1>Odarlis Perez</h1>
          <h2>Licenciada en Economia</h2>
        </div>
      </div>
      <div className="home__right">
        <div className="marvel-device iphone-x">
          <div className="notch">
            <div className="camera"></div>
            <div className="speaker"></div>
          </div>
          <div className="top-bar"></div>
          <div className="sleep"></div>
          <div className="bottom-bar"></div>
          <div className="volume"></div>
          <div className="overflow">
            <div className="shadow shadow--tr"></div>
            <div className="shadow shadow--tl"></div>
            <div className="shadow shadow--br"></div>
            <div className="shadow shadow--bl"></div>
          </div>
          <div className="inner-shadow"></div>
          <div className="screen">
            <div className="top">
              <img src="/img/cellTop.png" alt="Cell Top" />
            </div>
            <Grid />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
