import React, { Component } from 'react';
import Footer from './Footer.js';
import CardContainer from './CardContainer.js';
import Header from './Header'
import './main.scss'



export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      score: 0
    }
  }

  updateScore = () => {
    let newScore = this.state.score + 1
    this.setState({
      score: newScore
    })
  }

  recallFromLocalStorage = () => {

  }

  render() {
    return (
      <div className='main'> 
        <Header score={ this.state.score } numberOfQuestions={ this.props.chosenCommands.length }/>
        <CardContainer chosenCommands={ this.props.chosenCommands } updateScore={ this.updateScore }/>
        <Footer />
      </div>
    );
  }
}