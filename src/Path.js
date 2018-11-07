import React, { Component } from 'react';
import './Path.scss'


export default class Path extends Component {
  constructor() {
    super()
    this.state = {
      showNameInput: true
    }
  }
  render() {
    return (
      <div className='path'>
        <p className='choose-path'>Choose your path:</p>
        <div className='button-wrapper'>  
          <button className='level-btn beginner' value='gitCommands' onClick={ this.props.choosePath }>Git Commands</button>
          <button className='level-btn advanced' value='terminalCommands' onClick={ this.props.choosePath }>Terminal Commands</button>
        </div>
        <button className='start-learning' onClick={ this.props.showSplash }>Start Learning</button>
      </div>
    );
  }
}