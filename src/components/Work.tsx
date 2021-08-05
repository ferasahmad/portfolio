import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@material-ui/lab";
import { Paper } from "@material-ui/core";
// @ts-ignore
import Birds from "../assets/birds.mp4";

function Work() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <video className={classes.video} autoPlay loop muted>
        <source src={Birds} type="video/mp4" />
      </video>
      <div>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>2020</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                className={[classes.timelineItem, classes.timelineItem].join(
                  " "
                )}
              >
                <h2 className={classes.companyName}>Scout</h2>
                <ul className={classes.listContainer}>
                  <li className={classes.listItem}>
                    Successfully managed three different React applications
                    while collaborating with other front-end developers on a
                    React Native project.
                  </li>
                  <li className={classes.listItem}>
                    Worked closely with UX designers to translate designs into
                    responsive and high performative software.
                  </li>
                  <li className={classes.listItem}>
                    Daily stand-ups with team members to determine priorities
                    and features.
                  </li>
                  <li className={classes.listItem}>
                    Implemented Auth0 that authenticated users into our
                    applications.
                  </li>
                  <li className={classes.listItem}>
                    Implemented Amplitude across all applications that analyzed
                    user interactions.
                  </li>
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>2019</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                className={[classes.timelineItem, classes.timelineItem].join(
                  " "
                )}
              >
                <h2 className={classes.companyName}>V1Apps</h2>
                <ul className={classes.listContainer}>
                  <li className={classes.listItem}>
                    Challenges included optimization between Android and IOS,
                    which was solved by following React Native best practices
                    and critical feature testing.
                  </li>
                  <li className={classes.listItem}>
                    Translated UI designs into high performative responsive
                    software for both IOS and Android devices.
                  </li>
                  <li className={classes.listItem}>
                    Sent test builds to team members and early access users
                    using xCode and Firebase
                  </li>
                  <li className={classes.listItem}>
                    Mixpanel was used to assess user interactions across the
                    application.
                  </li>
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>2019</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.timelineItem}>
                <h2 className={classes.companyName}>HopUp</h2>
                <ul className={classes.listContainer}>
                  <li className={classes.listItem}>
                    Converted UI designs into high performative software while
                    being responsible for filling gaps in the designs to
                    optimize responsiveness.
                  </li>
                  <li className={classes.listItem}>
                    Implemented Redux that transferred and displayed data
                    throughout the whole application.
                  </li>
                  <li className={classes.listItem}>
                    Firebase was used to authenticate users into our
                    application.
                  </li>
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
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
    position: "relative",
  },
  timelineItemContainer: {
    background: "white",
    borderRadius: "4px",
    padding: "30px",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    zIndex: -1,
  },
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

export default Work;
