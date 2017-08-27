import React, { Component } from 'react';


class Answer extends Component {
  state={
    selected: false
  }
  toggleSelection() {

    this.setState({
      selected: !this.state.selected
    })
  }
  render() {
    console.log("Selected is:", this.state.selected)
    var style = {};
    if (this.state.selected) {
      if(this.props.logo==='dropbox'){
        style.backgroundColor= 'green';
      } else {
        style.backgroundColor= 'red';
      }
    }
    return (

        <img
          style={style}
          src={process.env.PUBLIC_URL + '/images/' + this.props.logo + '.svg'}
          onClick={
            this.toggleSelection.bind(this)
          }
          />


    );
  }
}

export default Answer;
