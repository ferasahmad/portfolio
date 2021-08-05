import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import SocialButton from "../components/SocialButton";
import LinkedInLogo from "../assets/linkedin-icon.png";
import GmailIcon from "../assets/gmail-icon.png";
import GithubIcon from "../assets/github-icon.png";
import TwitterLogo from "../assets/twitter-icon.png";
// @ts-ignore
import Clouds from "../assets/clouds2.mp4";

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <video className={classes.video} autoPlay loop muted>
        <source src={Clouds} type="video/mp4" />
      </video>
      <h3 className={classes.h1}>CONNECT WITH ME</h3>
      <div>
        <SocialButton
          link="https://www.linkedin.com/in/feras-ahmad-4900031a6"
          logo={LinkedInLogo}
        />
        <SocialButton link="https://github.com/ferasahmad" logo={GithubIcon} />
        <SocialButton link="mailto:firastaf878@gmail.com" logo={GmailIcon} />
        <SocialButton link="https://twitter.com/ferastaf" logo={TwitterLogo} />
      </div>
      <p className={classes.p}>Website made by me :)</p>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  h1: {
    color: "black",
    marginBottom: "32px",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    zIndex: -2,
  },
  p: {
    bottom: 10,
    right: 10,
    color: "black",
    position: "absolute",
  },
});

export default Contact;
