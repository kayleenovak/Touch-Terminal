import React, { Component } from 'react';
import './main.scss';


export default class Question extends Component {
  render() {
    return (
      <div> 
        <h3>{this.props.question}</h3>
        <input type='text' className='guess-input'/>
        <button onClick={ this.props.showAnswer }>Submit Your Guess</button>
      </div>
    );
  }
}