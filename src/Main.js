import React, { Component } from 'react';
import Footer from './Footer.js';
import CardContainer from './CardContainer.js';
import Header from './Header'
import './main.scss'



export default class Main extends Component {

  render() {
    return (
      <div className='main'> 
        <Header />
        <CardContainer chosenCommands={ this.props.chosenCommands }/>
        <Footer />
      </div>
    );
  }
}