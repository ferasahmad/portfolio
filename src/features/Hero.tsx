import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FadeIn from "react-fade-in";

// @ts-ignore
import Clouds from "../assets/clouds.mp4";
// @ts-ignore
import Bubble from "../assets/bubble.mp4";
// @ts-ignore
import Birds from "../assets/birds.mp4";
// @ts-ignore
import Mountain from "../assets/mountain.mp4";

interface HeroProps {
  onClickAbout: () => void;
  onClickWork: () => void;
  onClickContact: () => void;
}

function Hero({ onClickAbout, onClickWork, onClickContact }: HeroProps) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <video className={classes.video} autoPlay loop muted>
        <source src={Clouds} type="video/mp4" />
      </video>
      <FadeIn
        delay={500}
        className={classes.container}
        transitionDuration={1000}
      >
        <h1 className={classes.title}>FERAS AHMAD</h1>
        <p className={classes.text}>Front-end Developer</p>
        <div className={classes.buttonsContainer}>
          <Button onClick={onClickAbout} className={classes.button}>
            about
          </Button>
          <Button onClick={onClickWork} className={classes.button}>
            work
          </Button>
          <Button onClick={onClickContact} className={classes.button}>
            contact
          </Button>
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
    color: "black",
    position: "relative",
  },
  title: {
    zIndex: 100,
    fontFamily: "MajorMonoDisplay",
    fontSize: "60px",
    margin: 0,
    "@media(max-width: 540px)": {
      fontSize: "50px",
    },
    "@media(max-width: 450px)": {
      fontSize: "40px",
    },
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    zIndex: -2,
  },
  text: {
    margin: "20px",
    marginLeft: "25px",
    fontSize: "14px",
    textAlign: "center",
    letterSpacing: 10,
    fontWeight: 500,
    "@media(max-width: 450px)": {
      letterSpacing: 8,
      fontSize: "12px",
    },
  },
  buttonsContainer: {
    display: "flex",
  },
  button: {
    margin: "12px",
    marginTop: 0,
    borderWidth: "1.5px !important",
    borderColor: "black",
    borderStyle: "solid",
    color: "black",
    fontWeight: 500,
    fontSize: "12px",
  },
});

export default Hero;
