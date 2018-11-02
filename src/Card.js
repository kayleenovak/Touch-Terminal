import React, { Component } from 'react';
import Question from './Question.js';
import Guess from './Guess.js';
import Result from './Result.js'
import './main.scss';


export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      showCorrect: null,
      showIncorrect: null
    }
  }

  showAnswer = () => {

    this.setState({
      showResult: true
    })
  }

  render() {
    return (
      <div> 
        {
          this.state.showCorrect ? <CorrectGuess /> : <Question question={ this.props.question }/> 
        }
        { this.state.showIncorrect ? <IncorrectGuess /> : <Question question={ this.props.question }/> 

        }
      </div>
    );
  }
}