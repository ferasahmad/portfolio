import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>FERAS AHMAD</h1>
      <p className={classes.text}>Front-end Developer</p>
      <div className={classes.buttonsContainer}>
        <Button className={classes.button}>about</Button>
        <Button className={classes.button}>work</Button>
        <Button className={classes.button}>contact</Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background: "black",
    textTransform: "uppercase",
    color: "white"
  },
  title: {
    fontFamily: "MajorMonoDisplay",
    fontSize: "60px",
    margin: 0
  },
  text: {
    margin: "20px",
    fontSize: "14px",
    // fontFamily: "MajorMonoDisplay",
    textAlign: "center",
    letterSpacing: 10,
    fontWeight: 500
  },
  buttonsContainer: {
    display: "flex",
  },
  button: {
    margin: "12px",
    marginTop: 0,
    borderWidth: '0.5px',
    borderColor: "white",
    borderStyle: "solid",
    color: "white"
  },
});

export default Hero;