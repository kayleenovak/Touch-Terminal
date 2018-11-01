import React, { Component } from 'react';
import Question from './Question.js';
import Guess from './Guess.js';
import Result from './Result.js'
import './main.scss';


export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      showResult: null
    }
  }

  render() {
    return (
      <div> 
        <Question />
        <Guess />
        <Result />
      </div>
    );
  }
}