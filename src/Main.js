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
      cardIndex: 0,
      showPractice: false,
      showFinalScore: false,
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

  nextCard = () => {
    let newIndex = this.state.cardIndex + 1
    if (this.state.cardIndex < this.props.numberOfQuestions - 1) {
      this.setState({
        cardIndex: newIndex
      })
    } else {
      this.setState({
        showFinalScore: true
      })
    }
  }

  updateScore = () => {
    let newScore = this.state.score + 1
    let percentage = Math.floor((newScore / this.props.numberOfQuestions) * 100)
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
    let numOfQuestions = questions.length
    this.props.practice(numOfQuestions)
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
      this.props.resetPath(event)
      this.setState({
        showPractice: false,
        showFinalScore: false,
        incorrectAnswers: []
      })
    }
    this.setState({
      score: 0,
      cardIndex: 0,
      percentage: 0,
      incorrectAnswers: []
    })
  }

  render() {
    return (
      <div className='main'> 
        <Header chosenPath={ this.props.chosenPath } resetScore={ this.resetScore } showPractice={ this.showPractice } />
        { 
          this.state.showPractice ? <Practice showFinalScore={ this.state.showFinalScore } nextCard={ this.nextCard } cardIndex={ this.state.cardIndex } localStorage={ this.state.localStorage } updateScore={ this.updateScore } checkIncorrectAnswers={ this.checkIncorrectAnswers } resetScore={ this.resetScore } chosenPath={ this.props.chosenPath } playerScore={ this.state.percentage } playerName={ this.props.playerName }/> : <CardContainer finalScore={ this.state.showFinalScore } nextCard={ this.nextCard } cardIndex={ this.state.cardIndex } chosenPath={ this.props.chosenPath } chosenCommands={ this.props.chosenCommands } updateScore={ this.updateScore } resetScore={ this.resetScore } checkIncorrectAnswers={ this.checkIncorrectAnswers } playerScore={ this.state.percentage } playerName={ this.props.playerName } />
        }
        <Score playerName={ this.props.playerName } questionsCorrect={ this.state.score } totalQuestions={ this.props.numberOfQuestions } percentage={ this.state.percentage } />
        <PracticeCommands showPractice={ this.showPractice } incorrectAnswers={ this.state.incorrectAnswers } />
        <Footer />
      </div>
    );
  }
}