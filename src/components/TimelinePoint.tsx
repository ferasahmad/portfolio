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
      <TimelineOppositeContent>{year}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot></TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.timelineItem}>
          <h2 className={classes.companyName}>{companyName}</h2>
          <ul className={classes.listContainer}>
            {achievementsAndDuties.map((bulletPoint) => (
              <li className={classes.listItem}>{bulletPoint}</li>
            ))}
          </ul>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

const useStyles = makeStyles({
  timelineItem: {
    padding: "50px",
    textAlign: "left",
    backgroundColor: "white !important",
    color: "black",
  },
  listContainer: {
    padding: "0px",
  },
  companyName: {
    fontFamily: "MajorMonoDisplay",
    fontSize: "30px",
  },
  listItem: {
    marginBottom: "10px",
    "@media(max-width: 850px)": {
      fontSize: "14px",
    },
  },
});

export default TimelinePoint;
