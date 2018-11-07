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
      showSplash: true,
      terminalCommands: [],
      gitCommands: [],
      chosenPath: '',
      chosenCommands: [],
      playerName: null
    }
  }

  componentDidMount = () => {
    fetch('https://memoize-datasets.herokuapp.com/api/v1/terminalCommands')
      .then(response => response.json())
      .then(terminalCommands => this.setState({
        terminalCommands: terminalCommands.terminalCommands
      }))
      .catch(error => console.log(error));
    fetch('https://memoize-datasets.herokuapp.com/api/v1/gitCommands')
      .then(response => response.json())
      .then(gitCommands => this.setState({
        gitCommands: gitCommands.gitCommands
      }))
      .catch(error => console.log(error));
  }

  choosePath = (event) => {
    let path = event.target.value
    this.setState({
      chosenPath: path
    })
  }

  resetPath = (event) => {
    let chosenPath = this.state[event.target.value]
    this.setState({
      chosenPath: event.target.value,
      chosenCommands: chosenPath
    })
  }

  showSplash = (event) => {
    let chosenPath = this.state[this.state.chosenPath]
    this.setState({
      showSplash: false,
      chosenCommands: chosenPath
    })
  }

  setPlayerName = (event) => {
    event.preventDefault()
    let name = event.target.previousSibling.value
    console.log(name)
    this.setState({
      playerName: name
    })
  }

  render() {
    return (
      <div className="App">
      {
        this.state.showSplash ? <Splash choosePath={ this.choosePath } showSplash={ this.showSplash } setPlayerName={ this.setPlayerName }/> : <Main playerName={ this.state.playerName } chosenCommands={ this.state.chosenCommands } playerName={ this.state.playerName } chosenPath={ this.state.chosenPath } resetPath={ this.resetPath }/>
      }
      </div>
    );
  }
}

export default App;
