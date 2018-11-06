import React, { Component } from 'react';
import './CorrectGuess.scss'
import './main.scss';


export default class CorrectGuess extends Component {
  render() {
    return (
      <div className='correct-guess'> 
        <div className='wave'></div>
        <img src='./images/cloud.svg' className='cloud-one'/>
        <img src='./images/lightbulb.svg' className='lightbulb'/>
        <img src='./images/cloud.svg' className='cloud-two'/>
        <p className='correct'>Correct!</p>
        <button className='next-card-btn' onClick={ this.props.showQuestion }>Next Card</button>
      </div>
    );
  }
}