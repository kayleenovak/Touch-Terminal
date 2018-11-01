import React, { Component } from 'react';
import Footer from './Footer.js';
import CardContainer from './CardContainer.js';
import Header from './Header'



export default class Main extends Component {
  render() {
    return (
      <div> 
        <Header />
        <CardContainer />
        <Footer />
      </div>
    );
  }
}