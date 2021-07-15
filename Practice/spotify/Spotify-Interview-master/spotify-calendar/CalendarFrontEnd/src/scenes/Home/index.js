import React, { Component } from "react";
import Calandar from "scenes/Home/Calendar";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment(),
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.renderMonthLabel = this.renderMonthLabel.bind(this);
  }

  renderMonthLabel() {
    const { month } = this.state;

    return month.format("MMMM YYYY");
  }

  previous() {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, "month"),
    });
  }

  next() {
    const { month } = this.state;

    this.setState({
      month: month.add(1, "month"),
    });
  }

  render() {
    return (
      <Calandar
        month={this.state.month}
        nextMonth={this.next}
        renderMonthLabel={this.renderMonthLabel}
        previousMonth={this.previous}
      />
    );
  }
}

export default App;
