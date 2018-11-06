import React, { Component } from 'react';
import Card from './Card';
import FinalScore from './FinalScore.js'
import './CardContainer.scss';
import './main.scss'


export default class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      cardIndex: 0,
      showFinalScore: false,
      localStorageIndex: 0
    }
  }

  nextCard = () => {
    let newIndex = this.state.cardIndex + 1
    if (this.state.cardIndex < this.props.chosenCommands.length - 1) {
      this.setState({
        cardIndex: newIndex
      })
    } else {
      this.setState({
        showFinalScore: true
      })
    }
  }

  setToLocalStorage = () => {
    let incorrectAnswer = this.props.chosenCommands[this.state.cardIndex]
    let id = this.state.localStorageIndex
    this.state.localStorageIndex = this.state.localStorageIndex + 1
    localStorage.setItem(id, JSON.stringify(incorrectAnswer))
  }

  render() {
    return (
      <div className='card-container'>
      {
        this.state.showFinalScore ? <FinalScore /> : <Card answer={ this.props.chosenCommands[this.state.cardIndex].answer } question={ this.props.chosenCommands[this.state.cardIndex].question } nextCard={ this.nextCard } updateScore={ this.props.updateScore } setStorage={ this.setToLocalStorage } checkIncorrectAnswers={ this.props.checkIncorrectAnswers }/>
      }
      </div>
    )
  }
}