import React, { Component } from 'react';
import './Header.scss';


export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <p>Touch Commands</p>
        <p>Score: { this.props.score }/{ this.props.numberOfQuestions }</p>
      </header>
    );
  }
}