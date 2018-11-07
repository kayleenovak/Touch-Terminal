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
          this.props.playerScore < 65 ? <LowScore resetScore={ this.props.resetScore } playerName={ this.props.playerName } playerScore={ this.props.playerScore } chosenPath={ this.props.chosenPath } /> : this.props.playerScore > 99 ? <PerfectScore resetScore={ this.props.resetScore }playerName={ this.props.playerName } chosenPath={ this.props.chosenPath } /> : <MidScore resetScore={ this.props.resetScore } playerName={ this.props.playerName } playerScore={ this.props.playerScore } chosenPath={ this.props.chosenPath } /> 
        }
      </div>
    )
  }
}