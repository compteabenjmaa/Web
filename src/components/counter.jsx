import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };
  handleIncrement = produit => {
    console.log(produit);
    this.setState({ count: this.state.value + 1 });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCounter()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncrement({ id: 1 })}
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
