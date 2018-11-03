import React, { Component } from 'react';
import Question from './Question.js';
import CorrectGuess from './CorrectGuess.js';
import IncorrectGuess from './IncorrectGuess.js'
import './main.scss';


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
    if(guess === this.props.answer) {
      this.setState({
        showQuestion: false,
        showCorrect: true
      })
    } else {
      this.setState({
        showQuestion: false,
        showIncorrect: true
      })
    }
  }

  showQuestion = () => {
    this.setState({
      showQuestion: true,
      showCorrect: null,
      showIncorrect: null
    })
    this.props.nextCard()
  }

  render() {
    return (
      <div> 
        {
          this.state.showQuestion ? <Question question={ this.props.question } answer={ this.props.answer} showAnswer={ this.showAnswer }/> : this.state.showCorrect ? <CorrectGuess showQuestion={ this.showQuestion } /> : <IncorrectGuess /> 
        }
      </div>
    );
  }
}