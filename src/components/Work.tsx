import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// @ts-ignore
import { Timeline, Event } from "react-timeline-scribble";

function Work() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div style={{width: "500px"}}>
        <Timeline>
          <Event interval={"2016 – 2018"} title={"Lorem"}>
            <p>
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </Event>
          <Event interval={"2015 – 2016"} title={"Lorem"}>
            <p>
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </Event>
          <Event interval={"2016 – 2018"} title={"Lorem"}>
            <p>
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </Event>
          <Event interval={"2015 – 2016"} title={"Lorem"}>
            <p>
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </Event>
        </Timeline>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    padding: "75px 0 75px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    background: "white"
  },
  
});

export default Work;