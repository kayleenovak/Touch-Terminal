import React, { Component } from 'react';
import Card from './Card';
import './CardContainer.scss';
import './main.scss'


export default class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      cardIndex: 0,
      localStorageIndex: 0
    }
  }

  nextCard = () => {
    console.log(this.state.cardIndex)
    let newIndex = this.state.cardIndex + 1
    this.setState({
      cardIndex: newIndex
    })
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
        <Card answer={ this.props.chosenCommands[this.state.cardIndex].answer } question={ this.props.chosenCommands[this.state.cardIndex].question } nextCard={ this.nextCard } updateScore={ this.props.updateScore } setStorage={ this.setToLocalStorage }/>
      </div>
    )
  }
}