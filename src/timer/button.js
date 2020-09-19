import React, { Component } from "react";
import "./timer.css";

export default class Button extends Component {
  handleStartTimer() {
    return this.props.timeToggle(this.props.time);
  }
  render() {
    return (
      <button onClick={this.handleStartTimer.bind(this)}>
        {this.props.time} секунд
      </button>
    );
  }
}
