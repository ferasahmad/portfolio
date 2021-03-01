import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

function Work() {
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
    background: "purple"
  },
  
});

export default Work;