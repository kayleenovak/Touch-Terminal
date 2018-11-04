import React, { Component } from 'react';
import './main.scss';
import './Question.scss'


export default class Question extends Component {
  render() {
    return (
      <div className='question-container'>
        <div className='wave'></div> 
        <h2 className='directions'>What command does the following:</h2>
        <h3 className='question'>{this.props.question}</h3>
        <input type='text' className='guess-input' placeholder='Type your answer here'/>
        <button className='guess-btn' onClick={ this.props.showAnswer }>Submit Your Guess</button>
      </div>
    );
  }
}