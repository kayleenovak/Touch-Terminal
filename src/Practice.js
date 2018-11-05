import React, { Component } from 'react';
import Card from './Card';


export default class Practice extends Component {
  constructor() {
    super()
    this.state = {
      cardIndex: 0
    }
  }

  nextCard = () => {
    let newIndex = this.state.cardIndex + 1
    this.setState({
      cardIndex: newIndex
    })
  }

  render() {
    return (
      <div className='practice'>
        <Card answer={ this.props.localStorage[this.state.cardIndex].answer } question={ this.props.localStorage[this.state.cardIndex].question } nextCard={ this.nextCard } updateScore={ this.props.updateScore }/>
      </div>
    )
  }
}