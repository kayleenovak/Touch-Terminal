import React, { Component } from 'react';
import Main from './Main.js';
import Splash from './Splash.js';
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
      {
        this.state.showSplash ? <Splash showSplash={ this.showSplash }/> : <Main />
      }
      </div>
    );
  }
}

export default App;
