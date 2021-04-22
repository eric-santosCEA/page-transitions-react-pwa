import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { TweenLite} from "gsap";
import "./App.scss";

import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurWork from './pages/OurWork'
import JoinUs from './pages/JoinUs'

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/our-work", name: "Our Work", Component: OurWork },
  { path: "/join-us", name: "Join Us!", Component: JoinUs }
];

function App() {
  const onEnter = node => {
    TweenLite.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
  };

  const onExit = node => {
    TweenLite.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };

  return (
    <>
      <Header />
      <div className='container'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames='page'
                onExit={onExit}
                onEntering={onEnter}
                unmountOnExit>
                <div className='page'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
      <div class="search">
  <img src="chuck-norris.png" alt="Chuck Norris" width="32" height="32" />
  <label>
    <input type="search" />
    Search words in jokes
  </label>
</div>
    </>
  );
}

export default App;
