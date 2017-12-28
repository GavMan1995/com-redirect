import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 href='http://gavyncaldwell.me'>Redirecting to gavyncaldwell.me</h3>
        <p>If youre not redirected click <a href='http://gavyncaldwell.me'> here</a></p>
      </div>
    );
  }

  componentWillMount () {
    window.location = 'http://gavyncaldwell.me'
  }
}

export default App;
