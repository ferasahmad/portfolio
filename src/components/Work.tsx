import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
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
                    Successfully managed three different ReactTS web
                    applications while also collaborating with other front-end
                    developers on a React Native mobile project.
                  </li>
                  <li className={classes.listItem}>
                    Worked closely with UX designers to translate designs to
                    responsive and high performative software.
                  </li>
                  <li className={classes.listItem}>
                    Daily stand-ups with team members to determine priorities
                    and features.
                  </li>
                  <li className={classes.listItem}>
                    Managed to keep an average of 2k visitors per day on live
                    applications while building features, fixing bugs, and
                    learning TypeScript.
                  </li>
                  <li className={classes.listItem}>
                    Changed and refactored features from feedback from team
                    members and active users.
                  </li>
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
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
                    Managed to learn mobile development with React Native while
                    fully handling the frontend side of the application.
                  </li>
                  <li className={classes.listItem}>
                    Sent test builds to team members and early access users
                    using XCode and Firebase
                  </li>
                  <li className={classes.listItem}>
                    Implemented user behavior and interactions in the
                    application by using Mixpanel.
                  </li>
                  <li className={classes.listItem}>
                    Challenges included optimization between different devices
                    like Android and IOS, Firebase notification implementation,
                    and user authentication.
                  </li>
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.timelineItem}>
                <h2 className={classes.companyName}>HopUp</h2>
                <ul className={classes.listContainer}>
                  <li className={classes.listItem}>
                    Brought UI designs to life while filling in gaps in some
                    features to complete optimization and responsiveness.
                  </li>
                  <li className={classes.listItem}>
                    Learning Redux and successfully implementing it throughout
                    the application to manage data transformation.
                  </li>
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
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
                    Was Introduced to front-end technologies like HTML, CSS,
                    JavaScript, React, Angular, and also Jira.
                  </li>
                  <li className={classes.listItem}>
                    Challenges included API integration with React.
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
    // background: "gray",
    position: "relative",
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
  // v1appsContainer: {
  //   background:
  //     "radial-gradient(at 5% 63%, hsla(223,100%,87%,1) 0, transparent 43%),radial-gradient(at 73% 35%, hsla(222,100%,62%,1) 0, transparent 51%), radial-gradient(at 24% 53%, hsla(0,0%,100%,1) 0, transparent 67%),  radial-gradient(at 11% 7%, hsla(217,69%,43%,1) 0, transparent 51%);",
  // },
  // scoutContainer: {
  //   background:
  //     "radial-gradient(at 24% 53%, hsla(0,0%,100%,1) 0, transparent 67%), radial-gradient(at 11% 7%, hsla(253,100%,62%,1) 0, transparent 51%),radial-gradient(at 99% 28%, hsla(310,79%,79%,1) 0, transparent 58%),  radial-gradient(at 79% 48%, hsla(253,99%,62%,1) 0, transparent 34%);",
  // },
  listContainer: {
    padding: "0px",
  },
  companyName: {
    fontFamily: "MajorMonoDisplay",
    fontSize: "30px",
  },
  listItem: {
    marginBottom: "10px",
  },
});

export default Work;
