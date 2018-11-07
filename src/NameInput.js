import React, { Component } from 'react';
import './NameInput.scss'



export default class NameInput extends Component {
  constructor() {
    super()
    this.state = {
      showNameInput: true
    }
  }

  render() {
    return (
        <form>
          <input className='name-input' type='text' placeholder='Type your name here' />
          <button className='submit-name' onClick={ this.props.showOptions }>Submit</button>
        </form>
    );
  }
}