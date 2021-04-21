import React, {lazy, Suspense} from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { TweenLite} from "gsap";
import "./App.scss";

import Header from "./components/Header";


const Home = lazy(() => import("./pages/Home.js"));
const About = lazy(() => import("./pages/About.js"));
const OurWork = lazy(() => import("./pages/OurWork.js"));
const JoinUs = lazy(() => import("./pages/JoinUs.js"));



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
      <div className="container">
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route className='page' exact path='/' component={Home}/>
          <Route className='page' exact path='/about' component={About}/>
          <Route className='page' exact path='/our-work' component={OurWork}/>
          <Route className='page' exact path='/join-us' component={JoinUs}/>
        </Switch>
      </Suspense>
      </div>
    </>
  );
}

export default App;
