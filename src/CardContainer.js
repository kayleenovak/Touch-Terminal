import React, { Component } from 'react';
import Card from './Card';
import './CardContainer.scss';


export default class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      cardIndex: 0
    }
  }

  nextCard = () => {
    console.log(this.state.cardIndex)
    let newIndex = this.state.cardIndex + 1
    this.setState({
      cardIndex: newIndex
    })
  }

  render() {
    return (
      <div className='card-container'>
        <Card answer={ this.props.chosenCommands[this.state.cardIndex].answer } question={ this.props.chosenCommands[this.state.cardIndex].question } nextCard={ this.nextCard } updateScore={ this.props.updateScore }/>
      </div>
    )
  }
}