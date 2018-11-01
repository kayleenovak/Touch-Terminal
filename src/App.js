import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './Splash.js';
import Header from './Header';
import CardContainer from './CardContainer.js';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showSplash: true
    }
  }

  showSplash = () => {
    this.setState({
      showSplash: false
    })
  }
  
  render() {
    return (
      <div className="App">
       <Splash />
       <Header />
       <CardContainer />
       <Footer />
      </div>
    );
  }
}

export default App;
