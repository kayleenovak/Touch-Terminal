import React, { Component } from 'react';
import './Header.scss';
import './main.scss';


export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <p>Touch Commands</p>
        <button onClick={ this.props.showPractice }>Commands to Practice</button>
      </header>
    );
  }
}