import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import './main.scss';


export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1 className='touch-terminal-header'>Touch Terminal <span className='drop-shadow blinking'><FontAwesomeIcon icon="lightbulb"/></span></h1>
      </header>
    );
  }
}