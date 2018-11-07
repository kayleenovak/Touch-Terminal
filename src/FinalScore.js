import React, { Component } from 'react';
import LowScore from './LowScore.js';
import MidScore from './MidScore.js';
import PerfectScore from '.PerfectScore.js'
import './FinalScore.scss';


export default class FinalScore extends Component {
  render() {
    return (
      <div className='final-score-container'>
        {
          this.props.playerScore < 65 ? <LowScore playerName={ this.props.playerName } playerScore={ this.props.playerScore }/> : this.props.percentage > 99 ? <PerfectScore playerName={ this.props.playerName }/> : <MidScore playerName={ this.props.playerName } playerScore={ this.props.playerScore }/> 
        }
      </div>
    )
  }
}