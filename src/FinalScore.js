import React, { Component } from 'react';
import LowScore from './LowScore.js';
import MidScore from './MidScore.js';
import PerfectScore from './PerfectScore.js'
import './FinalScore.scss';


export default class FinalScore extends Component {
  render() {
    return (
      <div className='final-score-container'>
        {
          this.props.playerScore < 65 ? <LowScore playerName={ this.props.playerName } playerScore={ this.props.playerScore } chosenPath={ this.props.chosenPath }/> : this.props.percentage > 99 ? <PerfectScore playerName={ this.props.playerName } chosenPath={ this.props.chosenPath }/> : <MidScore playerName={ this.props.playerName } playerScore={ this.props.playerScore } chosenPath={ this.props.chosenPath }/> 
        }
      </div>
    )
  }
}