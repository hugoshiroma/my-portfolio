import React, { useRef, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Transition } from "react-transition-group";

import { Header } from "components";
import "components/icons";
import { artBackground } from "assets/assets-urls.enum";
import { backgroundImageAnimation } from "animations/background-image.animation";
import { fadeout } from "animations/fadeout";

import "./App.scss";
import { links, routes } from "./config";

function App() {
  let backgroundIntro = useRef();
  let pageOnExit = useRef();

  useEffect(() => {
    backgroundImageAnimation(backgroundIntro);
  }, [backgroundIntro]);

  return (
    <div
      className="App background-image"
      ref={(el) => {
        backgroundIntro = el;
      }}
      style={{ backgroundImage: `url(${artBackground})` }}
    >
      <Header links={links} />
      {routes.map(({ name, path, Component }) => (
        <Route key={name} path={path} exact>
          {({ match }) => (
            <Transition
              nodeRef={pageOnExit}
              in={match != null}
              unmountOnExit
              addEndListener={(node, done) => fadeout(node, done, match)}
            >
              <div
                className="page"
                ref={(el) => {
                  pageOnExit = el;
                }}
              >
                <Component />
              </div>
            </Transition>
          )}
        </Route>
      ))}
      <Redirect to="/about" />
    </div>
  );
}

export default App;
