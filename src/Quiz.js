import React, { Component } from 'react';
import Answer from './Answer.js';

class Quiz extends Component {
  state = {
  	guess: ""
  }

  render() {
    return (
      <div>
        <h2>Which company does this logo belong to?</h2>
        <img src={`${process.env.PUBLIC_URL} /images/${this.props.answer}.svg`} />
        <ul>
	        {this.props.choices.map(function(choice){
	        	return <Answer choice={choice} />
	        })}
        </ul>
      </div>

    );
  }
}

export default Quiz;
