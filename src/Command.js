import React, { Component } from 'react';
import './Command.scss'
import './main.scss';


export default class PracticeCommands extends Component {

  render() {
    return (
      <li>{ this.props.answer } </li>
    )
  }
}