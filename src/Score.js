import React, { Component } from 'react';
import './Score.scss';
import './main.scss';


export default class Score extends Component {

  render() {
    return (
      <div className='score'>
        <h2 className='player-name'></h2>
        <h2 className='score-header'></h2>
        <h3 className='player-score'></h3>
        <h3 className='player-percentage'></h3>
      </div>
    )
  }
}