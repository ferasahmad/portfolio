import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@material-ui/lab";
import { Paper } from "@material-ui/core";

interface Props {
  companyName: string;
  year: string;
  achievementsAndDuties: string[];
}

const TimelinePoint = ({ companyName, year, achievementsAndDuties }: Props) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.oppositeContent}>
        {year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className={classes.timelineDot}></TimelineDot>
        <TimelineConnector className={classes.timelineConnector} />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={0} className={classes.paper}>
          <h2 className={classes.companyName}>{companyName}</h2>
          <ul className={classes.listContainer}>
            {achievementsAndDuties.map((bulletPoint) => (
              <li key={bulletPoint} className={classes.listItem}>
                {bulletPoint}
              </li>
            ))}
          </ul>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

const useStyles = makeStyles({
  paper: {
    padding: "50px",
    textAlign: "left",
    backgroundColor: "white",
    color: "black",
    "@media(max-width: 550px)": {
      padding: "30px",
    },
  },
  listContainer: {
    padding: 0,
  },
  oppositeContent: {
    "@media(max-width: 550px)": {
      display: "none",
    },
  },
  timelineDot: {
    background: "black",
    boxShadow: "none",
  },
  timelineConnector: {
    background: "white",
    boxShadow: "none",
  },
  companyName: {
    fontFamily: "MajorMonoDisplay",
    fontSize: "30px",
    marginTop: 0,
  },
  listItem: {
    marginTop: "10px",
    "@media(max-width: 850px)": {
      fontSize: "14px",
    },
  },
});

export default TimelinePoint;
