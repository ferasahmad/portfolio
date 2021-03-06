import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import * as Scroll from 'react-scroll'; 
import { scroller, Element } from 'react-scroll';
// @ts-ignore
import ProgressBar from "react-scroll-progress-bar";

import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  const classes = useStyles();

  const onClickAbout = () => {
    console.log("kcmdkcmdmk")
    scroller.scrollTo("about", {
      smooth: true
    });
  };

  const onClickWork = () => {
    scroller.scrollTo("work", {
      smooth: true
    });
  };

  const onClickContact = () => {
    scroller.scrollTo("contact", {
      smooth: true
    });
  };

  return (
    <div className={classes.container}>
        <ProgressBar bgcolor="white" />
        <Hero 
          onClickAbout={onClickAbout} 
          onClickWork={onClickWork} 
          onClickContact={onClickContact} 
        />
        <Element name="about" className={classes.element}>
          <About />
        </Element>
        <Element name="work" className={classes.element}>
          <Work />
        </Element>
        <Element name="contact" className={classes.element}>
          <Contact />
        </Element>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    background: "transparent",
    fontFamily: "DMSans"
  },
  element: {
    width: "100%",
    height: "100%",
  }
});

export default App;
