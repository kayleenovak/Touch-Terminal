import React, { Component } from 'react';



export default class Splash extends Component {
  render() {
    return (
      <div> 
        <h1>Touch Terminal</h1>
        <h4>Add terminal skills to your developer toolbox</h4>
        <input type='text' placeholder='Type your name here' />
        <button>Submit</button>
        <button>Beginner</button>
        <button>Novice</button>
        <button>Advanced</button>
        <button onClick={ this.props.showSplash }>Start Learning</button>
      </div>
    );
  }
}