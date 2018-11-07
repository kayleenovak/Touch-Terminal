import React, { Component } from 'react';
import './PerfectScore.scss';


export default class PerfectScore extends Component {
  render() {
    return (
      <div className='perfect-score'>
        <h2>Congratulations, { this.props.playerName }!</h2>
        <h3>You earned 100%</h2>
        <h4>Keep up the stellar work</h4>
      </div>
    )
  }
}