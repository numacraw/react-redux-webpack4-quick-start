import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { num: state.num };
};
const ConnectedShow = ({ num }) => (
    <h1>{num}</h1>
);
const Show = connect(mapStateToProps)(ConnectedShow);
export default Show;