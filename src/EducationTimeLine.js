import * as React from 'react';
import {TimelineSeparator, TimelineConnector, TimelineContent, 
  TimelineDot, Timeline, TimelineItem, timelineItemClasses} from '@mui/lab';
import CornellLogo from './Cornell_University.png'
import ISULogo from './Iowa_State_University.png'
import {Typography, Avatar, Link} from '@mui/material';

export default function EducationTimeLine() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >      <TimelineItem>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <Avatar alt="Cornell University Logo" src={CornellLogo} style={{marginLeft: 20,height: 35,
                         width: 35,}} /> 
    <TimelineContent>
    <Typography sx={{fontWeight: 'bold', fontSize: 18  }}>Cornell University</Typography> 
       <Typography> Master's Degree</Typography> 
       <Typography>Major: Information Science</Typography>
       <Typography style={{color: 'Grey'}}>2022 - 2023</Typography>
       <Typography >GPA: 4.17/4.3 Major:4.17/4.3</Typography>
      </TimelineContent>
  </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <Avatar alt="Iowa State University Logo" src={ISULogo} style={{marginLeft: 20,height: 35,
                             width: 35,}} /> 
        <TimelineContent>
           <Typography sx={{fontWeight: 'bold', fontSize: 18  }}>Iowa State University</Typography> 
           <Typography> Honors Bachelor's degree</Typography> 
           <Typography>Major: Management Information Systems; Minor: Statistics</Typography>
           <Typography style={{color: 'Grey'}}>2017 - 2020</Typography>
           <Typography >GPA: 3.93/4.0 Major:4.0/4.0</Typography>
           <Typography>Graduated with Honor and Summa Cum Laude</Typography> 
           <Typography>University Honor Program, Iowa State University - <Link sx={{fontWeight: 'bold', fontSize: '16px'}} onClick={event =>  window.location.href="https://www.honors.iastate.edu/alumni/spring-2020-graduates"} component="button"> Spring 2020 Honors Graduate Profiles</Link>
           <Typography>Dean's List Honors</Typography></Typography>
           
           <Typography>Top 2% Business Sophmore</Typography>
           <Typography>Beta Gamma Sigma</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
