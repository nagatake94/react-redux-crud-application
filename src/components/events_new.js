import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//import { postEvent } from "../actions";
import events from "../reducers/events";

class EventsNew extends Component {
  render(){
  return (
  <React.Fragment>
    <div>"kei!"</div>
  </React.Fragment>
  )
  }
}

//const mapDispatchToProps = ({ postEvents })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(null, null)(EventsNew);
