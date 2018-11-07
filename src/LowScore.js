import React, { Component } from 'react';
import './LowScore.scss';


export default class LowScore extends Component {
  
  render() {
    return (
      <div className='low-score'>
        <div className='wave'></div>
        <div className='score-summary'>
          <h2>Good job, { this.props.playerName }!</h2>
          <h3>You earned { this.props.playerScore }%</h3>
          <h4>Keep practicing, you will have these commands down in no time</h4>
          <h4>Continue Learning:</h4>
        </div>
        {
          this.props.chosenPath === 'gitCommands' ? <button className='change-path-btn' onClick={ this.props.resetScore } value='terminalCommands'>Terminal Commands</button> : <button className='change-path-btn' onClick={ this.props.resetScore } value='gitCommands'>Git Commands</button>
        }
      </div>
    )
  }
}