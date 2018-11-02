import React, { Component } from 'react';
import Card from './Card';
import './CardContainer.scss';


export default class CardContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='card-container'>
      {
        this.props.chosenCommands.map(command => {
          return(<Card answer={ command.answer } question={ command.question }/>)
        })
      } 
      </div>
    );
  }
}