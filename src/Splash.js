import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Splash.scss'



export default class Splash extends Component {
  render() {
    return (
      <div className='splash-page'> 
        <h1 className='touch-terminal'>Touch Terminal <span className='drop-shadow blinking'><FontAwesomeIcon icon="lightbulb"/></span></h1>
        <h4 className='slogan'>Add terminal skills to your developer toolbox</h4>
        <form>
          <input className='name-input' type='text' placeholder='Type your name here' />
          <button className='submit-name'>Submit</button>
        </form>
        <div>  
          <button className='level-btn beginner'>Beginner</button>
          <button className='level-btn novice'>Novice</button>
          <button className='level-btn advanced'>Advanced</button>
        </div>
        <button className='start-learning' onClick={ this.props.showSplash }>Start Learning</button>
      </div>
    );
  }
}