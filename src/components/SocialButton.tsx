import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


function SocialButton({ link, logo }: {link: string, logo: string}) {
  const classes = useStyles();

  const onClick = () => {
    window.open(link, "_blank")
  };

  return (
    <Button onClick={() => onClick()} className={classes.button}><img className={classes.image} src={logo} alt="" /></Button>
  );
}

const useStyles = makeStyles({
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
  image: {
    width: "25px",
    height: "25px",
    filter: "brightness(0) invert(1)"
  }
});

export default SocialButton;
