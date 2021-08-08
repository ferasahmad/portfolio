import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Timeline } from "@material-ui/lab";

// @ts-ignore
import Birds from "../assets/birds.mp4";
import TimelinePoint from "../components/TimelinePoint";

function Work() {
  const classes = useStyles();
  const workExperience = [
    {
      company: "Scout",
      year: "2020",
      achievementsAndDuties: [
        "Handled multiple projects simultaneously while ensuring all project features were completed within deadline dates.",
        "Worked closely with UX designers to translate designs into responsive and high performative software.",
        "Daily stand-ups with team members to determine priorities and features.",
        "Implemented Auth0 that authenticated users into our applications.",
        "implemented and used Amplitude to display users statistics on their profile",
      ],
    },
    {
      company: "V1Apps",
      year: "2019",
      achievementsAndDuties: [
        "Challenges included optimization between Android and IOS, which was solved by following React Native best practices and critical feature testing.",
        "Translated UI designs into high performative responsive software for both IOS and Android devices.",
        "Sent test builds to team members and early access users using xCode and Firebase",
        "Mixpanel was used to assess user interactions across the application to specify popular features.",
      ],
    },
    {
      company: "HopUp",
      year: "2019",
      achievementsAndDuties: [
        "Converted UI designs into high performative software while being responsible for filling gaps in the designs to optimize responsiveness.",
        "Implemented Redux that transferred and displayed data throughout the whole application.",
        "Firebase was used to authenticate users into our application.",
      ],
    },
  ];

  return (
    <div className={classes.container}>
      <video className={classes.video} autoPlay loop muted>
        <source src={Birds} type="video/mp4" />
      </video>
      <div>
        <Timeline align="alternate">
          {workExperience.map((experience) => (
            <TimelinePoint
              key={experience.company}
              companyName={experience.company}
              achievementsAndDuties={experience.achievementsAndDuties}
              year={experience.year}
            />
          ))}
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
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    zIndex: -1,
  },
});

export default Work;
