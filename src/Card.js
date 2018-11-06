import React, { Component } from 'react';
import Question from './Question.js';
import CorrectGuess from './CorrectGuess.js';
import IncorrectGuess from './IncorrectGuess.js'
import './Card.scss';


export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      showQuestion: true,
      showCorrect: null,
      showIncorrect: null
    }
  }

  showAnswer = (event) => {
    let guess = event.target.previousSibling.value
    let card = event.target.parentElement.parentElement;
    if(guess === this.props.answer) {
      this.props.updateScore()
      this.flipCard(card);
      this.setState({
        showQuestion: false,
        showCorrect: true
      })
    } else {
      this.props.checkIncorrectAnswers(this.props.answer)
      this.props.setStorage()
      this.flipCard(card);
      this.setState({
        showQuestion: false,
        showIncorrect: true
      })
    }
  }

  showQuestion = (event) => {
    const card = event.target.parentElement.parentElement
    this.flipCard(card)
    this.setState({
      showQuestion: true,
      showCorrect: null,
      showIncorrect: null
    })
    this.props.nextCard()
  }

  flipCard = (parent) => {
    console.log(parent)
    parent.classList.toggle('flipped')
  }

  render() {
    return (
      <div className='card'> 
        {
          this.state.showQuestion ? <Question question={ this.props.question } answer={ this.props.answer} showAnswer={ this.showAnswer } /> : this.state.showCorrect ? <CorrectGuess showQuestion={ this.showQuestion } /> : <IncorrectGuess showQuestion={ this.showQuestion }/> 
        }
      </div>
    );
  }
}