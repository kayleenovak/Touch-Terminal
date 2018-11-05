import React, { Component } from 'react';
import Footer from './Footer.js';
import CardContainer from './CardContainer.js';
import Header from './Header.js';
import Practice from './Practice.js';
import PracticeCommands from './PracticeCommands.js';
import Score from './Score.js'
import './main.scss';



export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      percentage: 0,
      showPractice: false,
      localStorage: []
    }
  }

  updateScore = () => {
    let newScore = this.state.score + 1
    let percentage = Math.floor((newScore / this.props.chosenCommands.length) * 100)
    console.log(percentage)
    this.setState({
      score: newScore,
      percentage: percentage
    })
  }

  recallFromLocalStorage = () => {
    let questions = []
    for(let i = 0; i < localStorage.length; i++) {
      const parsedQuestion = JSON.parse(localStorage[i])
      questions.push(parsedQuestion)
      
    }
    this.props.chosenCommands.length = questions.length
    this.state.localStorage = questions
  }

  showPractice = () => {
    this.setState({
      showPractice: true
    })
    this.recallFromLocalStorage()
    this.resetScore()
  }

  resetScore = () => {
    this.setState({
      score: 0
    })
  }

  render() {
    return (
      <div className='main'> 
        <Header showPractice={ this.showPractice } />
        { 
          this.state.showPractice ? <Practice localStorage={ this.state.localStorage } updateScore={ this.updateScore }/> : <CardContainer chosenCommands={ this.props.chosenCommands } updateScore={ this.updateScore }/>
        }
        <Score playerName={ this.props.playerName } questionsCorrect={ this.state.score } totalQuestions={ this.props.chosenCommands.length } percentage={ this.state.percentage }/>
        <PracticeCommands />
        <Footer />
      </div>
    );
  }
}