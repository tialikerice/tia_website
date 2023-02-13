import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Iowa State University - Undergrad Program </Box>
            <br></br>Major: Management Information Systems; Minor: Statistics
            <br></br> GPA: 3.93/4.0</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        2018 Summer
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Stanford Summer Session</Box></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2019 Summer
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent > <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Information Technology Intern
        <br></br> Tyson Foods, Inc. 
        <br></br>Springdale, Arkansas</Box>
        <Box style={{marginRight:100}}>
        <br></br> • Explored data for Mexico team in multiple visualizations and measures using Power BI
        <br></br> • Deployed & Redesign International IT website on SharePoint Server as business requirements
        <br></br> • Collaborated with Tyson China to adopt technology standards to support business and drive growth
        <br></br> • Knowledge of SAP architecture and all international applications
        <br></br> • Created capabilities Mapping
        <br></br> • Helped automate manual processes for plants – Safety Chain Project
        <br></br> • Received training about Agile, Docker, Gitlab, SonarQube, Jenkins, Kubernetes, JFrog etc.
        <br></br> • Analysis data by Excel
        </Box>
        <br></br>
        <br></br> <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Research Assistant</Box>
        <br></br> • Involved in data pre-processing with Python for “Observing Neurological Activities during Interaction with Digital Human Controlled by AI Versus Human Actor”</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2019 Fall
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>A graphical Exploration of ISU Police Crime Logs</Box>
            <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Honor Project | Independent Study</Box>
            <Box style={{marginLeft:100}}>
            <br></br>With Professor Heike Hofmann from Statistic Department 
            <br></br>This research consists of a detailed exploration of the daily crime logs published by the ISU police department. The data consists of types of crime, a date stamp as well as an approximate location. Using maps to visualize spatial data and time series for longitudinal information, the goal of this exploration is to understand occurrences for crime reports with the goal to gain insight into triggers Using this understanding, we will(e.g. home games of the football team or nice weather). then build a statistical model with the aim to predict such occurrences. The overarching goal of this project is to inform the Cyclone community of crime occurrences using linked charts on a website.
            </Box>
            <br></br>
            <br></br>
            <br></br><Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Teaching Assistant</Box>
            <br></br>• MIS 320 Management Database Systems
            <br></br>• MIS 533 Data Management for Decision Makers</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2020 May
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Graduated from Iowa State University
            <br></br>Overall GPA 3.93 Major: 4.0</Box>
            <br></br> Graduated as Summa Cum Laude & Honor Student
            <br></br> Beta Gamma Sigma Spring 2019
            </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2020 July
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
            <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Application Developer
            <br></br> Tyson Foods, Inc. 
            <br></br> Springdale, Arkansas
            <br></br> Fresh Meat Innovation Team</Box>
            <Box style={{marginLeft:100}}>
            <br></br> <Typography align="left">• Model building support, data preprocessing, model evaluation weekly</Typography>
            <Typography align="left">• Designed and developed a desktop application and deployed in plant daily use for supporting Machine Learning model to achieve the accuracy rate of 99.9% by PyQt5 and Python</Typography>
            <Typography align="left">• Designed and developed a website application by React, Socket API, and docker to display real-time data and images for supporting machine learning models monitoring</Typography>
            <Typography align="left">• Created dashboard using Power BI sourcing from database to display alive data stream for supporting machine learning models</Typography>
            <Typography align="left">• Deployed data pre-processing automation for machine learning model by Python</Typography>
            <Typography align="left">• Visual inspection data cleaning for machine learning model</Typography>
            <Typography align="left">• Team Activity host</Typography>
            <br></br> 
            <Typography align="left">International IT - Asian Team</Typography>
            <Typography align="left">• Assisted with delivering executive-level international business forums and serve as a communication bridge</Typography>
            </Box>
            </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2022 Augest
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
            <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>Cornell University
            <br></br> College of Computing and Information Science
            <br></br> Master of Information Science
            <br></br> GPA: 4.17/4.3
            <br></br> Ithaca, NY</Box>
            </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Now
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
            </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
