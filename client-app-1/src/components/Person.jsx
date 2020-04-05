import React, { Component } from "react";
import $ from "jquery";
import { isThisTypeNode } from "typescript";
class Person extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getListPerson();
  }
  state = {
    formData: { name: "", age: "" },
    errorTab: [],
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

  handleChange(event) {
    const formData = this.state.formData;
    if (event.target.id === "name") {
      formData.name = event.target.value;
    } else {
      formData.age = event.target.value;
    }
    this.setState({ formData: formData });
  }

  isNumeric(value) {}

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
    let { formData, errorTab } = this.state;
    errorTab = [];
    if (formData.name.length === 0 || formData.name === "") {
      errorTab.push("the field name obligatory");
    }
    if (
      this.isNumeric(formData.age) ||
      (formData.age < 18 && formData.age > 35)
    ) {
      errorTab.push(
        "the field age obligatory and to be a number between 18 and 35 "
      );
    }
    this.setState({ errorTab: errorTab });
  }

  getForm() {
    return (
      <React.Fragment>
        <div className={this.getClassErrors()}>
          {this.state.errorTab.join(",")}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="input"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              value={this.state.formData.name}
              onChange={(e) => this.handleChange(e)}
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
              value={this.state.formData.age}
              onChange={(e) => this.handleChange(e)}
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

  getClassErrors() {
    let classes = "alert mt-2 alert-";
    classes += this.state.errorTab.length > 0 ? "danger" : "light";
    return classes;
  }
}

export default Person;
