import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import CornellLogo from './Cornell_University.png'
import TysonLogo from './Tyson_Foods.png'
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';

export default function WorkTimeLine() {
  return (
    <>
    <Grid>
    <Grid container spacing={2} wrap='nowrap' sx={{ overflow: "auto" }}>
      <Grid item><Avatar alt="Iowa State University Logo" src={TysonLogo} style={{height: 50,width: 50, display: 'flex',  justifyContent:'left', alignItems:'left'}}></Avatar> </Grid>
      <Grid item><Typography align="center" sx={{fontWeight: 'bold', fontSize: 18 ,display: 'flex' }} style = {{marginTop: 10}}>Tyson Foods</Typography></Grid>
    </Grid>
    <Grid>
    <Timeline style={{marginTop: 0}}
      sx={{[`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
           <Typography sx={{fontWeight: 'bold'}} > Application Developer</Typography> 
           <Typography style={{color: 'Grey'}}>2020 - 2022 | 2 Years | Full-Time</Typography>
           <Typography style={{color: 'Grey'}}>AR, Springdale</Typography>
           <Typography align="left">• Model building support, data preprocessing, model evaluation weekly</Typography>
            <Typography align="left">• Designed and developed a desktop application and deployed in plant daily use for supporting Machine Learning model to achieve the accuracy rate of 99.9% by PyQt5 and Python</Typography>
            <Typography align="left">• Designed and developed a website application by React, Socket API, and docker to display real-time data and images for supporting machine learning models monitoring</Typography>
            <Typography align="left">• Created dashboard using Power BI sourcing from database to display alive data stream for supporting machine learning models</Typography>
            <Typography align="left">• Deployed data pre-processing automation for machine learning model by Python</Typography>
            <Typography align="left">• Visual inspection data cleaning for machine learning model</Typography>
            <Typography align="left">• Team Activity host</Typography>
            <br></br> 
            <Typography align="left">International IT - Asian Team</Typography>
            <Typography align="left">• Assisted with delivering executive-level international business forums and serve as a communication bridge</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
           <Typography sx={{fontWeight: 'bold'}}> Information Technology Intern</Typography> 
           <Typography style={{color: 'Grey'}}>2019 May - Aug | 3 Month | Internship</Typography>
           <Typography style={{color: 'Grey'}}>AR, Springdale</Typography>
           <Typography>
            • Explored data for Mexico team in multiple visualizations and measures using Power BI
        <br></br> • Deployed & Redesign International IT website on SharePoint Server as business requirements
        <br></br> • Collaborated with Tyson China to adopt technology standards to support business and drive growth
        <br></br> • Knowledge of SAP architecture and all international applications
        <br></br> • Created capabilities Mapping
        <br></br> • Helped automate manual processes for plants – Safety Chain Project
        <br></br> • Received training about Agile, Docker, Gitlab, SonarQube, Jenkins, Kubernetes, JFrog etc.
        <br></br> • Analysis data by Excel
      </Typography>
          </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Grid>
    </Grid>
    </>
  );
}
