import React, { Component } from 'react';
import './App.css';

export default class ImageBlock extends Component {
  render() {
    return (
      <div className='imageBlock'>
        <img className={ this.props.imgClass } src={ this.props.imageURL } alt={ this.props.altText }/>
        <p>{ this.props.authorship } </p>
        
      </div>
    );
  }
}