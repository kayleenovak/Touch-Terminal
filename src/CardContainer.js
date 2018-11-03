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
    console.log(this.props)
    return (
      <div className='card-container'>
          return(<Card answer={ this.props.chosenCommands[this.state.cardIndex].answer } question={ this.props.chosenCommands[this.state.cardIndex].question } nextCard={ this.nextCard } />)
      </div>
    );
  }
}