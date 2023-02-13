import React from "react";
import { Slide, IconButton, Typography } from '@mui/material';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';

const words = ["Welcome, this is Tia's Person Website!", 
"Software Development, Data Analytics, Front-End"];
const transitionDuration = 500;

class TransitionCycle extends React.Component {
  state = {
    activeIndex: 0,
    elementIn: true
  };

  onClick = () => {
    this.setState({
      elementIn: false
    });
    setTimeout(() => {
      this.setState({
        elementIn: true,
        activeIndex: (this.state.activeIndex + 1) % words.length
      });
    }, transitionDuration);
  };

  render() {
    const { activeIndex, elementIn } = this.state;

    return (
      <div>
        <Slide
          in={this.state.elementIn}
          timeout={transitionDuration}
          direction="right"
        >
          <Typography variant="h1">{words[this.state.activeIndex]}</Typography>
        </Slide>
        <IconButton onClick={this.onClick}>
        <SwitchRightIcon sx={{ height: 50, width: 50, color: 'White' }}></SwitchRightIcon>
        </IconButton>
      </div>
    );
  }
}

export default TransitionCycle;
