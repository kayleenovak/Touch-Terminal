import React, { Component } from 'react';
import './Command.scss'
import './main.scss';


export default class PracticeCommands extends Component {

  render() {
    return (
      <li className='practice-command'>{ this.props.answer }</li>
    )
  }
}