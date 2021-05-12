import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Me from "../assets/me-2.jpg";
import Mountain from "../assets/mountain.png";
import MountainCropped from "../assets/mountain-cropped.png";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={Me} alt="" className={classes.me}/>
      {/* <img src={Mountain} alt="" className={classes.mountain}/>
      <img src={MountainCropped} alt="" className={classes.mountainCropped}/> */}
      <div className={classes.textContainer}>
        <p className={classes.text1}>
          Hi, I'm Feras 
        </p>
        <p className={classes.text2}>
          Passionate and detail orientated Front-end Developer with 3 years of experience building responsive applications specializing in ReactJS and React Native.
        </p>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background: "black",
    position: "relative",
    padding: "32px",
    boxSizing: "border-box"
  },
  mountain: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    display: "inline",
    '@media(max-width: 550px)': {
      display: "none"
    },
  },
  mountainCropped: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    display: "none",
    '@media(max-width: 550px)': {
      display: "inline"
    },
  },
  textContainer:{
    marginLeft: "64px", 
    '@media(max-width: 954px)': {
      marginLeft: "32px", 
    },
  },
  highlight: {
    backgroundColor: "white"
  },
  text1: {
    color: "white",
    fontSize: "30px",
    width: "100%",
    margin: 0,
  },
  text2: {
    color: "white",
    fontSize: "20px",
    width: "600px",
    lineHeight: "35px",
    '@media(max-width: 954px)': {
      fontSize: "16px",
      width: "400px",
    },
    '@media(max-width: 900px)': {
      width: "400px",
    },
    '@media(max-width: 665px)': {
      width: "100%",
    },
  },
  me: {
    height: "400px",
    width: "auto",
    '@media(max-width: 1024px)': {
      height: "300px",
    },
    '@media(max-width: 954px)': {
      height: "250px",
    },
    '@media(max-width: 610px)': {
      display: "none"
    },
  },
  linearGradient: {
    position: "absolute",
    height: "100%",
    width: "100%",
    background: 'linear-gradient(90deg, rgb(255,255,255,0) 40%, rgb(0,0,0) 90%)',
  },
});

export default About;