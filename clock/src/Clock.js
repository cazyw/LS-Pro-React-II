import React, { Component } from 'react';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';
import pic0 from './0.png';
import pic1 from './1.png';
import pic2 from './2.png';
import pic3 from './3.png';
import pic4 from './4.png';
import pic5 from './5.png';
import pic6 from './6.png';
import pic7 from './7.png';
import pic8 from './8.png';
import pic9 from './9.png';



export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.incrementTime = this.incrementTime.bind(this);
    this.dayInWords = this.dayInWords.bind(this);
    let superClock = new Date();
    this.state = {
      clock: superClock,
      day: superClock.getDay(),
      hours0: Math.floor((superClock.getHours())/10),
      minutes0: Math.floor((superClock.getMinutes())/10),
      seconds0: Math.floor((superClock.getSeconds())/10),
      hours1: (superClock.getHours())%10,
      minutes1: (superClock.getMinutes())%10,
      seconds1: (superClock.getSeconds())%10
    }
  }


  componentWillMount() {
    let intervalTimer = setInterval(this.incrementTime, 1000);
  }

  componentWillUnmount() {
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
        minutes1: (this.state.clock.getMinutes())%10,
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
            The local time is currently 
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
            Importing the images at the top - (not working)
          </div>
        </div>
        <div className='panel-body imgContainer'>
          <img src={pic0} alt='the digit 0' />
          <img src={`pic${this.state.seconds1}`} alt='seconds1' />
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