import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BounceLoader from "react-spinners/BounceLoader";

function LoadingPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <BounceLoader size={70} color="#45b7fe" />
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
  },
});

export default LoadingPage;
