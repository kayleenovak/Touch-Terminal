import React, { Component } from 'react';
import Card from './Card';
import FinalScore from './FinalScore.js'
import './CardContainer.scss';
import './main.scss'


export default class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      localStorageIndex: 0
    }
  }

  setToLocalStorage = () => {
    let incorrectAnswer = this.props.chosenCommands[this.props.cardIndex]
    let id = this.state.localStorageIndex
    this.state.localStorageIndex = this.state.localStorageIndex + 1
    localStorage.setItem(id, JSON.stringify(incorrectAnswer))
  }


  render() {
    return (
      <div className='card-container'>
      {
        this.props.finalScore ? <FinalScore resetScore={ this.props.resetScore } chosenPath={ this.props.chosenPath } playerScore={ this.props.playerScore } playerName={ this.props.playerName }/> : <Card answer={ this.props.chosenCommands[this.props.cardIndex].answer } question={ this.props.chosenCommands[this.props.cardIndex].question } nextCard={ this.props.nextCard } updateScore={ this.props.updateScore } setStorage={ this.setToLocalStorage } checkIncorrectAnswers={ this.props.checkIncorrectAnswers } />
      }
      </div>
    )
  }
}