import React, { Component } from 'react';
import './LowScore.scss';


export default class LowScore extends Component {
  render() {
    return (
      <div className='low-score'>
        <h2>Good job, { this.props.playerName }!</h2>
        <h3>You earned { this.props.playerScore }%</h3>
        <h4>Keep practicing, you will have these commands down in no time</h4>
        {
          this.props.chosenPath === 'gitCommands' ? <button>Terminal Commands</button> : <button>Git Commands</button>
        }
      </div>
    )
  }
}