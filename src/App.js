import React, { Component } from 'react';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ash's logo quiz</h1>
        <Quiz answer="pinterest" choices={["Pinterest", "Plaxo", "Etsy", "Delicious", "Dropbox"]} />
      </div>
    );
  }
}

export default App;
