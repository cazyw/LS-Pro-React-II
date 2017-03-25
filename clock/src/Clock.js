import React, { Component } from 'react';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';



export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.incrementTime = this.incrementTime.bind(this);
    this.dayInWords = this.dayInWords.bind(this);
    this.incrementTimeState = this.incrementTimeState.bind(this);
    let superClock = new Date();
    this.state = {
      clock: superClock,
      day: superClock.getDay(),
      hours: superClock.getHours(),
      minutes: superClock.getMinutes(),
      seconds: superClock.getSeconds(),
      hours0: Math.floor((superClock.getHours())/10),
      minutes0: Math.floor((superClock.getMinutes())/10),
      seconds0: Math.floor((superClock.getSeconds())/10),
      hours1: (superClock.getHours())%10,
      minutes1: (superClock.getMinutes())%10,
      seconds1: (superClock.getSeconds())%10
    }
  }


  incrementTime() {
    this.setState(currentState => {
      return {
        clock: new Date(),
        day: currentState.clock.getDay(),
        hours: currentState.clock.getHours(),
        minutes: currentState.clock.getMinutes(),
        seconds: currentState.clock.getSeconds(),
        hours0: Math.floor((currentState.clock.getHours())/10),
        minutes0: Math.floor((currentState.clock.getMinutes())/10),
        seconds0: Math.floor((currentState.clock.getSeconds())/10),
        hours1: (currentState.clock.getHours())%10,
        minutes1: (currentState.clock.getMinutes())%10,
        seconds1: (currentState.clock.getSeconds())%10
      };
    });
  }

  incrementTimeState() {
    this.setState(currentState => {
      return {
        seconds: currentState.clock.getSeconds()
      };
    });
  }  

  dayInWords(numDate){
    let days = {
      0: 'Sunday', 
      1: 'Monday', 
      2: 'Tuesday', 
      3: 'Wednesday', 
      4: 'Thursday', 
      5: 'Friday', 
      6: 'Saturday'
    };
    return(
      days[numDate]
    );
  }

  render() {
    setInterval(this.incrementTime, 1000);
    let bob = 'clockFace2';
    return(
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <div className='panel-title'>
            The local time is currently 
          </div>
        </div>
        <div className='panel-body imgContainer'>
          <img src={require('./'+this.state.hours0+'.png')} alt='clock' />
          <img src={require('./'+this.state.hours1+'.png')} alt='clock' /> 
          <span className='clockText'>:</span>
          <img src={require('./'+this.state.minutes0+'.png')} alt='clock' /> 
          <img src={require('./'+this.state.minutes1+'.png')} alt='clock' /> 
          <span className='clockText'>:</span>
          <img src={require('./'+this.state.seconds0+'.png')} alt='clock' />
          <img src={require('./'+this.state.seconds1+'.png')} alt='clock' />
        </div>

        <div className='panel-heading'>
          <div className='panel-title'>
            Old fashioned way: 
          </div>
        </div>
        <div className='panel-body'>
          {this.state.clock.toLocaleTimeString()} <br />
          {this.dayInWords(this.state.day)} <br />
        </div>
      </div>
    );
  }
}