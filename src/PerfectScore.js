import React, { Component } from 'react';
import './PerfectScore.scss';


export default class PerfectScore extends Component {
  render() {
    return (
      <div className='perfect-score'>
        <h2>Congratulations, { this.props.playerName }!</h2>
        <h3>You earned 100%</h3>
        <h4>Keep up the stellar work</h4>
        {
          this.props.chosenPath === 'gitCommands' ? <button>Terminal Commands</button> : <button>Git Commands</button>
        }
      </div>
    )
  }
}