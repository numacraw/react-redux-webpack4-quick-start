import React, { Component } from "react";
import { connect } from "react-redux";
import { addNum } from "../actions/index";
const mapDispatchToProps = dispatch => {
  return {
    addNum: num => dispatch(addNum(num)),
  };
};

class ConnectedCounter extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNum(1);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">
          ADD
        </button>
      </form>
    );
  }
}
const Counter = connect(null, mapDispatchToProps)(ConnectedCounter);
export default Counter;