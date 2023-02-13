import * as React from 'react';
import {useNavigate} from "react-router-dom"
import {TimelineSeparator, TimelineConnector, TimelineContent, 
  TimelineDot, Timeline, TimelineItem, timelineItemClasses} from '@mui/lab';
import CornellLogo from './Cornell_University.png'
import ISULogo from './Iowa_State_University.png'
import {Typography, Avatar, Grid, Link} from '@mui/material';

export default function ResearchTimeLine() {
  const navigate = useNavigate();
        return (
          <>
          <Grid>
          <Grid container spacing={2} wrap='nowrap' sx={{ overflow: "auto" }}>
            <Grid item><Avatar alt="Iowa State University Logo" src={ISULogo} style={{height: 50,width: 50, display: 'flex',  justifyContent:'left', alignItems:'left'}}></Avatar> </Grid>
            <Grid item><Typography align="center" sx={{fontWeight: 'bold', fontSize: 18 ,display: 'flex' }} style = {{marginTop: 10}}>Iowa State University</Typography></Grid>
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
                 <Typography sx={{fontWeight: 'bold'}} > Teaching Assistant</Typography> 
                 <Typography style={{color: 'Grey'}}>2019 - 2020 | 1 Years | Part-Time</Typography>
                 <Typography style={{color: 'Grey'}}>Ames, Iowa</Typography>
                 <Typography>
                  • MIS 320 Management Database Systems
            <br></br>• MIS 533 Data Management for Decision Makers
            </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                 <Typography sx={{fontWeight: 'bold'}}> Research Assistant</Typography> 
                 <Typography style={{color: 'Grey'}}>2019 May - Aug | 3 Month | Part-Time</Typography>
                 <Typography style={{color: 'Grey'}}>Ames, Iowa</Typography>
                 <Typography> • Involved in data pre-processing with Python for “Observing Neurological Activities during Interaction with Digital Human Controlled by AI Versus Human Actor”
    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
              <Link sx={{fontWeight: 'bold', fontSize: '16px'}} onClick={()=>navigate("/ISUResearchPage")} component="button"> Honor Project | Independent Study: A graphical Exploration of ISU Police Crime Logs</Link>
              <Typography style={{color: 'Grey'}}>2019 Aug - Dec | 3 Month</Typography>
              <Typography style={{color: 'Grey'}}>Ames, Iowa</Typography>
            <Typography style={{color: 'Grey'}}> Worked with Professor Heike Hofmann from Statistic Department</Typography>
            <Typography >
            This research consists of a detailed exploration of the daily crime logs published by the ISU police department. The data consists of types of crime, a date stamp as well as an approximate location. Using maps to visualize spatial data and time series for longitudinal information, the goal of this exploration is to understand occurrences for crime reports with the goal to gain insight into triggers Using this understanding, we will(e.g. home games of the football team or nice weather). then build a statistical model with the aim to predict such occurrences. The overarching goal of this project is to inform the Cyclone community of crime occurrences using linked charts on a website.
            </Typography>
      </TimelineContent>
      </TimelineItem>
          </Timeline>
          </Grid>
          </Grid>
          </>
        );
      }
      