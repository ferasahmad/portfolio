import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <Hero />
        <About />
        <Work />
        <Contact />
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
});

export default App;
