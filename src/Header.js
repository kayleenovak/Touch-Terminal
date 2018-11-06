import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import './main.scss';


export default class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <header className='header'>
        <h1 className='touch-terminal-header'>Touch Terminal <span className='drop-shadow blinking'><FontAwesomeIcon icon="lightbulb"/></span></h1>
        <div>
          {
            this.props.chosenPath.length === 11 ? <button value='terminalCommands' onClick={ this.props.resetScore }>Terminal Commands</button> : <button value='gitCommands' onClick={ this.props.resetScore }>Git Commands</button>
          }
          <button>Practice</button>
        </div>
      </header>
    );
  }
}