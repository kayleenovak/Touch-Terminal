import React, { Component } from 'react';
import './MidScore.scss';


export default class MidScore extends Component {
  render() {
    return (
      <div className='mid-score'>
        <div className='wave'></div>
        <div className='score-summary'>
          <h2>Great job, { this.props.playerName }!</h2>
          <h3>You earned { this.props.playerScore }%</h3>
          <h4>Keep up the good work</h4>
          <h4>Continue Learning:</h4>
        </div>
        {
          this.props.chosenPath === 'gitCommands' ? <button className='change-path-btn' onClick={ this.props.resetScore } value='terminalCommands'>Terminal Commands</button> : <button className='change-path-btn' onClick={ this.props.resetScore } value='gitCommands'>Git Commands</button>
        }
      </div>
    )
  }
}