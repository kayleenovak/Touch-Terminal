import React, { Component } from 'react';
import Command from './Command.js'
import './PracticeCommands.scss'
import './main.scss';


export default class PracticeCommands extends Component {

  render() {
    return (
      <div className='practice-commands'>
        <h2 className='practice-commands-header'>Commands to Practice:</h2>
        <ul className='command-list'>
        {
          this.props.incorrectAnswers.map(answer => {
            return <Command answer={ answer } />
          })
        }
        </ul>
        <button className='practice-btn' onClick={ this.props.showPractice }>Practice</button>
      </div>
    )
  }
}