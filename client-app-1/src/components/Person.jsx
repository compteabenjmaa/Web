import React, { Component } from "react";
import $ from "jquery";
class Person extends Component {
  componentDidMount() {
    this.getListPerson();
  }
  state = {
    persons: [],
  };
  render() {
    return this.getTab();
  }

  getTab() {
    if (this.state.persons.length === 0) {
      return <div className="alert alert-primary">pas d'éléments</div>;
    } else {
      return (
        <React.Fragment>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.persons.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
  }

  getListPerson() {
    const url = "http://localhost:8080";
    $.getJSON(url.concat("/listPerson"))
      .done((data) => {
        this.setState({ persons: data.listPerson });
      })
      .fail((error) => {
        console.log(error);
      });
  }
}

export default Person;
