import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class PickDates extends Component {
  state = {
    value: new Date()
  };

  onChange = value => {
    this.setState({ value });
  };

  selectedDate = () => {
    return `The selected date is ${this.props.value} `;
  };

  render() {
    return (
      <div className="PickDates">
        PickDates
        <Calendar
          onChange={this.onChange}
          value={this.state.value}
          onClickDay={this.selectedDate}
        />
        <div>
          The selected date is {new Date(this.state.value.toString()).getDate()}
        </div>
        {/* <div>{users.map(user => user.availability[0])[0].toString()}</div> */}
      </div>
    );
  }
}
