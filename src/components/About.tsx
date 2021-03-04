import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

function About() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
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
    background: "black"
  },
  
});

export default About;