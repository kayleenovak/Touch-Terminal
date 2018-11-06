import React, { Component } from 'react';
import './IncorrectGuess.scss';


export default class IncorrectGuess extends Component {
  render() {
    return (
      <div className='incorrect-guess'> 
        <div className='wave'></div>
        <img src='./images/lightbulb-out.svg' className='lightbulb-out'/>
        <p className='incorrect'>Incorrect</p>
        <button className='next-card' onClick={ this.props.showQuestion }>Next Card</button>
      </div>
    );
  }
}