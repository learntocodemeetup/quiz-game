import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>logo quiz</h2>
        </div>
        <p className="App-intro">
          Try find what logo this is
        </p>
        <Question />
        <div className="Answers">
          <Answer logo="behance"/>
          <Answer logo="dropbox"/>
          <Answer logo="path"/>
        </div>

      </div>
    );
  }
}

export default App;
