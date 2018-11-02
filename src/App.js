import React, { Component } from 'react';
import Main from './Main.js';
import Splash from './Splash.js';
import Footer from './Footer.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

library.add(faLightbulb);

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
