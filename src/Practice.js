import React, { Component } from 'react';
import Card from './Card';
import FinalScore from './FinalScore.js'
import './main.scss'


export default class Practice extends Component {

  render() {
    return (
      <div className='card-container'>
        {
          this.props.showFinalScore ? <FinalScore resetScore={ this.props.resetScore } chosenPath={ this.props.chosenPath } playerScore={ this.props.playerScore } playerName={ this.props.playerName } /> : <Card answer={ this.props.localStorage[this.props.cardIndex].answer } question={ this.props.localStorage[this.props.cardIndex].question } nextCard={ this.props.nextCard } updateScore={ this.props.updateScore } checkIncorrectAnswers={ this.props.checkIncorrectAnswers }/>
        }
      </div>
    )
  }
}