import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SocialButton from "../components/SocialButton";
import LinkedInLogo from "../assets/linkedin-icon.png";
import GmailIcon from "../assets/gmail-icon.png";
import GithubIcon from "../assets/github-icon.png";
import TwitterLogo from "../assets/twitter-icon.png";


function Contact() {
  const classes = useStyles();


  return (
    <div className={classes.container}>
      <h3 className={classes.h1}>CONNECT WITH ME</h3>
      <div>
        <SocialButton link="https://www.linkedin.com/in/feras-ahmad-4900031a6" logo={LinkedInLogo} />
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
    color: "white",
    marginBottom: "32px",
  },
  p: {
    bottom: 10,
    right: 10,
    color: "white",
    position: "absolute",
  },
  button: {
    margin: "12px",
    width: "70px",
    height: "70px",
    marginTop: 0,
    borderWidth: '0.5px',
    borderRadius: "35px",
    borderColor: "white",
    borderStyle: "solid",
    color: "white",
    fontWeight: 500,
    fontSize: "12px",
  },
});

export default Contact;