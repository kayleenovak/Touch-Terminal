import React, { Component } from 'react';
import './PerfectScore.scss';


export default class PerfectScore extends Component {
  render() {
    return (
      <div className='perfect-score'>
        <div className='wave'></div>
        <div className='score-summary'>
          <h2>Congratulations, { this.props.playerName }!</h2>
          <h3>You earned 100%</h3>
          <h4>Keep up the stellar work</h4>
          <h4>Continue Learning:</h4>
        </div>
        {
          this.props.chosenPath === 'gitCommands' ? <button className='change-path-btn' onClick={ this.props.resetScore } value='terminalCommands'>Terminal Commands</button> : <button className='change-path-btn' onClick={ this.props.resetScore } value='gitCommands'>Git Commands</button>
        }
      </div>
    )
  }
}