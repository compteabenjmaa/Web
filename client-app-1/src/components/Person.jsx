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
    return (
      <div>
        <span>{this.getForm()}</span>
        <span> {this.getTab()} </span>
      </div>
    );
  }

  getForm() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="input"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="input"
              className="form-control"
              id="age"
              aria-describedby="emailHelp"
              placeholder="Enter age"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary" value="Envoyé">
            Envoyer
          </button>
        </form>
      </React.Fragment>
    );
  }

  getTab() {
    if (this.state.persons.length === 0) {
      return <div className="alert alert-primary mt-2">pas d'éléments</div>;
    } else {
      return (
        <React.Fragment>
          <table className="table table-striped table-bordered mt-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.persons.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mr-2 w-25"
                    >
                      <span
                        className="glyphicon glyphicon-edit"
                        aria-hidden="true"
                      ></span>
                      Edit
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger btn-sm w-25"
                    >
                      <span
                        className="glyphicon glyphicon-edit"
                        aria-hidden="true"
                      ></span>
                      Delete
                    </button>
                  </td>
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
