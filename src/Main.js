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
      incorrectAnswers: [],
      localStorage: []
    }
  }

  checkIncorrectAnswers = (incorrect) => {
    let incorrectAnswers = this.state.incorrectAnswers
    incorrectAnswers.push(incorrect)
    this.setState({
      incorrectAnswers:  incorrectAnswers
    })
  }

  updateScore = () => {
    let newScore = this.state.score + 1
    let percentage = Math.floor((newScore / this.props.chosenCommands.length) * 100)
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

  showPractice = (event) => {
    this.setState({
      showPractice: true
    })
    this.recallFromLocalStorage()
    this.resetScore(event)
  }

  resetScore = (event) => {
    if(event.target.value === 'gitCommands' || event.target.value === 'terminalCommands') {
      localStorage.clear()
      this.props.resetPath(event)
      this.setState({
        showPractice: false,
        incorrectAnswers: []
      })
    }
    this.setState({
      score: 0,
      percentage: 0,
      incorrectAnswers: []
    })
  }

  render() {
    return (
      <div className='main'> 
        <Header chosenPath={ this.props.chosenPath } resetScore={ this.resetScore } showPractice={ this.showPractice }/>
        { 
          this.state.showPractice ? <Practice localStorage={ this.state.localStorage } updateScore={ this.updateScore }/> : <CardContainer chosenPath={ this.props.chosenPath } chosenCommands={ this.props.chosenCommands } updateScore={ this.updateScore } resetScore={ this.resetScore } checkIncorrectAnswers={ this.checkIncorrectAnswers } playerScore={ this.state.percentage } playerName={ this.props.playerName }/>
        }
        <Score playerName={ this.props.playerName } questionsCorrect={ this.state.score } totalQuestions={ this.props.chosenCommands.length } percentage={ this.state.percentage }/>
        <PracticeCommands showPractice={ this.showPractice } incorrectAnswers={ this.state.incorrectAnswers }/>
        <Footer />
      </div>
    );
  }
}