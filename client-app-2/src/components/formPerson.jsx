import React, { Component } from "react";

class FormPerson extends Component {
  constructor() {
    super();
  }

  componentDidUpdate(prevProps) {
    if (this.props.formPersons.id !== prevProps.formPersons.id) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.getClassErrors()}>
          {this.props.formPersons.errorTab.join(",")}
        </div>
        <form onSubmit={this.props.onEnvoye}>
          <div className="form-group">
            <input
              type="hidden"
              className="form-control"
              name="id"
              aria-describedby="idHelp"
              value={this.props.formPersons.formData.id}
              onChange={(e) => this.props.onRemplace(e)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="input"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              value={this.props.formPersons.formData.name}
              onChange={(e) => this.props.onRemplace(e)}
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
              value={this.props.formPersons.formData.age}
              onChange={(e) => this.props.onRemplace(e)}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary" value="Envoyé">
            Envoyer
          </button>
        </form>
      </React.Fragment>
    );
  }

  getClassErrors() {
    let classes = "alert mt-2 alert-";
    classes += this.props.formPersons.errorTab.length > 0 ? "danger" : "light";
    return classes;
  }
}

export default FormPerson;
