import React, { Component } from 'react';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.incrementTime = this.incrementTime.bind(this);
    this.dayInWords = this.dayInWords.bind(this);
    this.state = {
      clock: new Date(),
      day: (new Date()).getDay(),
      hours0: 0,
      minutes0: 0,
      seconds0: 0,
      hours1: 0,
      minutes1: 0,
      seconds1: 0
    }
  }


  componentDidMount() {
    let intervalTimer = setInterval(this.incrementTime, 1000);
  }

  componentDidUnmount() {
    clearInterval(this.state.intervalTimer);
  }

  incrementTime() {
    this.setState(currentState => {
      return {
        clock: new Date(),
        day: currentState.clock.getDay(),
        hours0: Math.floor((this.state.clock.getHours())/10),
        minutes0: Math.floor((this.state.clock.getMinutes())/10),
        seconds0: Math.floor(((new Date()).getSeconds())/10),
        hours1: (this.state.clock.getHours())%10,
        minutes1: ((new Date()).getMinutes())%10,
        seconds1: ((new Date()).getSeconds())%10
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
    return(
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <div className='panel-title'>
            Minutes {this.state.clock.getMinutes()} and {this.state.clock.getMinutes() % 10} 
            The local time is currently ...
          </div>
        </div>
        <div className='panel-body imgContainer'>
          <img src={require('./'+this.state.hours0+'.png')} alt='hours0' />
          <img src={require('./'+this.state.hours1+'.png')} alt='hours1' /> 
          <span className='clockText'>:</span>
          <img src={require('./'+this.state.minutes0+'.png')} alt='minutes0' /> 
          <img src={require('./'+this.state.minutes1+'.png')} alt='minutes1' /> 
          <span className='clockText'>:</span>
          <img src={require('./'+this.state.seconds0+'.png')} alt='seconds0' />
          <img src={require('./'+this.state.seconds1+'.png')} alt='seconds1' />
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