import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { scroller, Element } from 'react-scroll';
// @ts-ignore
import ProgressBar from "react-scroll-progress-bar";

import { sendAmplitudeEvent } from "../utilities/amplitude";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";


function Main() {
  const classes = useStyles();

  useEffect(() => {
    sendAmplitudeEvent("page visited");
  }, []);

  const onClickAbout = () => {
    sendAmplitudeEvent("about button clicked");

    scroller.scrollTo("about", {
      smooth: true
    });
  };

  const onClickWork = () => {
    sendAmplitudeEvent("work button clicked");

    scroller.scrollTo("work", {
      smooth: true
    });
  };

  const onClickContact = () => {
    sendAmplitudeEvent("contact button clicked");

    scroller.scrollTo("contact", {
      smooth: true
    });
  };

  return (
    <div className={classes.container}>
      <ProgressBar bgcolor="gray" />
      <Hero 
        onClickAbout={onClickAbout} 
        onClickWork={onClickWork} 
        onClickContact={onClickContact} 
      />
      <Element name="about" className={classes.element}>
        <About />
      </Element>
      <Element name="work" style={{width: "100%"}}>
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

export default Main;
