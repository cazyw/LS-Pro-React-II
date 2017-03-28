import React, { Component } from 'react';
import ImageBlock from './ImageBlock';

export default class Acknowledgement extends Component {
  render(){
    return(
      <div className='acknowledgement'>
      This website was created as part of the LambdaSchool Pro exercise (Lesson 2).
      <br />
      More information on LambdaSchool can be be found here: <a href='https://lambdaschool.com/pro' target='_blank'>LambdaSchool Pro</a>. 
      So far it's been pretty awesome.
      <p>You can check out my Github page by clicking on the OctoCat</p>
      <a href='https://github.com/cazyw' target='_blank'>
      <ImageBlock imgClass='image100' authorship=' ' imageURL='https://octodex.github.com/images/original.png' alt='github' />
      </a>
       
      </div>
    );
  }
}