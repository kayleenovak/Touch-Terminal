import React, { Component } from 'react';
import LowScore from './LowScore.js';
import MidScore from './MidScore.js';
import PerfectScore from '.PerfectScore.js'
import './FinalScore.scss';


export default class FinalScore extends Component {
  render() {
    return (
      <div className='final-score-container'>
        {
          this.props.percentage < 65 ? <LowScore /> : this.props.percentage > 99 ? <PerfectScore /> : <MidScore /> 
        }
      </div>
    )
  }
}