import React, { Component } from 'react';
import './CorrectGuess.scss'
import './main.scss';


export default class CorrectGuess extends Component {
  render() {
    return (
      <div className='correct-guess'> 
        <div className='wave'></div>
        <img src='./images/lightbulb.svg' className='lightbulb'/>
        <p className='correct'>Correct!</p>
        <button className='next-card-btn'>Next Card</button>
      </div>
    );
  }
}