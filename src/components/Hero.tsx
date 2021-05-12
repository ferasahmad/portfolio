import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FadeIn from 'react-fade-in';

import Grain from "../assets/grain.png";

interface HeroProps {
  onClickAbout: () => void;
  onClickWork: () => void;
  onClickContact: () => void;
}

function Hero({onClickAbout, onClickWork, onClickContact}: HeroProps) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <img src={Grain} alt="" className={classes.grain} />
        <video className={classes.video} autoPlay loop muted>
          <source src="https://i.imgur.com/2Ly7hFD.mp4" type='video/mp4' />
        </video>
        <FadeIn className={classes.container} transitionDuration={900}>
          <h1 className={classes.title}>FERAS AHMAD</h1>
          <p className={classes.text}>Front-end Developer</p>
          <div className={classes.buttonsContainer}>
            <Button onClick={onClickAbout} className={classes.button}>about</Button>
            <Button onClick={onClickWork} className={classes.button}>work</Button>
            <Button onClick={onClickContact} className={classes.button}>contact</Button>
          </div>
        </FadeIn>
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
    color: "white",
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
    position: "fixed",
    objectFit: "cover",
    zIndex: -1
  },
  grain: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    opacity: "0.5"
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
    color: "white",
    fontWeight: 500,
    fontSize: "12px",
  },
});

export default Hero;