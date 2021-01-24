import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Route, Redirect } from "react-router-dom";
import { Transition } from "react-transition-group";
import { HeaderComponent } from "./components/header";
import "./components/icons/index.icons";
import { HomePage } from "./pages/home";
import { ProjectsPage } from "./pages/projects";
import { ExperiencePage } from "./pages/experience";
import "./App.scss";
import { artBackground } from "./assets/assets-urls.enum";
import { backgroundImageAnimation } from "./animations/background-image.animation";

const routes = [
  { name: "Sobre", path: "/about", Component: HomePage },
  { name: "Projetos", path: "/projects", Component: ProjectsPage },
  { name: "Experiência", path: "/experience", Component: ExperiencePage },
];

function App() {
  let backgroundIntro = useRef();
  let pageOnExit = useRef(null);

  useEffect(() => {
    backgroundImageAnimation(backgroundIntro);
  }, []);

  return (
    <div className="App">
      <img
        className="background-image"
        src={artBackground}
        alt="white partial background"
        ref={(el) => (backgroundIntro = el)}
      />
      <HeaderComponent></HeaderComponent>
      {routes.map(({ name, path, Component }) => (
        <Route key={name} path={path} exact>
          {({ match }) => (
            <Transition
              nodeRef={pageOnExit}
              in={match != null}
              unmountOnExit
              addEndListener={(node, done) => {
                gsap
                  .timeline({
                    defaults: { ease: "power3.inOut", duration: 1 },
                  })
                  .to(
                    node,
                    {
                      autoAlpha: match != null ? 1 : 0,
                      opacity: 0,
                      onComplete: done,
                    },
                    0
                  );
              }}
            >
              <div className="page" ref={el => {pageOnExit = el}}>
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
