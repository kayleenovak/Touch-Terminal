import React, { Component } from 'react';
import './MidScore.scss';


export default class MidScore extends Component {
  render() {
    return (
      <div className='mid-score'>
        <h2>Great job, { this.props.playerName }!</h2>
        <h3>You earned { this.props.playerScore }</h2>
        <h4>Keep up the good work</h4>
      </div>
    )
  }
}