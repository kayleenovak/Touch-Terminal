import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NameInput from './NameInput.js'
import Path from './Path.js'
import './Splash.scss'



export default class Splash extends Component {
  constructor() {
    super()
    this.state = {
      showNameInput: true
    }
  }

  showOptions = (event) => {
    console.log(1)
    event.preventDefault()
    this.props.setPlayerName(event)
    this.setState({
      showNameInput: false
    })
  }

  render() {
    return (
      <div className='splash-page'> 
        <h1 className='touch-terminal'>Touch Terminal <span className='drop-shadow blinking'><FontAwesomeIcon icon="lightbulb"/></span></h1>
        <h4 className='slogan'>Add Terminal & Git skills to your developer toolbox</h4>
        {
          this.state.showNameInput ? <NameInput showOptions={ this.showOptions } /> : <Path choosePath={ this.props.choosePath } showSplash={ this.props.showSplash } />
        }
      </div>
    );
  }
}