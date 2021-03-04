import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// @ts-ignore
import CloudsVideo from "../assets/videos/clouds.mp4";

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <video className={classes.video} autoPlay loop muted>
          <source src="https://i.imgur.com/2Ly7hFD.mp4" type='video/mp4' />
        </video>
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
    background: "transparent",
    textTransform: "uppercase",
    color: "white"
  },
  title: {
    zIndex: 100,
    fontFamily: "MajorMonoDisplay",
    fontSize: "60px",
    margin: 0,
    '@media(max-width: 540px)': {
      fontSize: "50px",
    },
    '@media(max-width: 450px)': {
      fontSize: "40px",
    }
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    zIndex: -1
  },
  text: {
    margin: "20px",
    marginLeft: "25px",
    fontSize: "14px",
    textAlign: "center",
    letterSpacing: 10,
    fontWeight: 500,
    '@media(max-width: 450px)': {
      letterSpacing: 8,
      fontSize: "12px",
    }
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