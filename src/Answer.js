import React, { Component } from 'react';


class Answer extends Component {
  state={
    selected: false
  }
  // toggleSelection() {

  //   this.setState({
  //     selected: !this.state.selected
  //   })
  // }

  changeSelection() {
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {

    var styling
    var selected = this.state.selected;
      if (selected) {
        styling = "selected"
      }
      else {
        styling = ""
      }

    return (
        <li><button className={styling} onClick={this.changeSelection.bind(this)}>{this.props.choice}</button></li>


    );
  }
}

export default Answer;
