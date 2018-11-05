import React, { Component } from 'react';
import './Score.scss';
import './main.scss';


export default class Score extends Component {

  render() {
    return (
      <div className='score'>
        <h2 className='player-name'>{ this.props.playerName }</h2>
        <h2 className='score-header'>Score:</h2>
        <h3 className='player-score'>{ this.props.questionsCorrect } / { this.props.totalQuestions }</h3>
        <h3 className='player-percentage'>{ this.props.percentage}%</h3>
      </div>
    )
  }
}