import React, { Component } from "react";
import $ from "jquery";
import StringUtility from "../utility/stringUtility";
import FormPerson from "./formPerson";
import ListPerson from "./listPerson";
class Persons extends Component {
  url = "http://localhost:8080";
  state = {
    formData: { name: "", age: "", id: "" },
    errorTab: [],
    persons: [],
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getListPerson();
  }

  handleChange(event) {
    const formData = this.state.formData;
    if (event.target.id === "name") {
      formData.name = event.target.value;
    } else if (event.target.id === "age") {
      formData.age = event.target.value;
    } else {
      formData.id = event.target.value;
    }
    this.setState({ formData: formData });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { formData, errorTab } = this.state;
    errorTab = [];
    if (!StringUtility.isNotEmpty(formData.name)) {
      errorTab.push("the field name obligatory");
    }

    if (
      StringUtility.isNumeric(formData.age) === false &&
      (Number.parseInt(formData.age) < 18 || Number.parseInt(formData.age) > 35)
    ) {
      errorTab.push(
        "the field age obligatory and to be a number between 18 and 35 "
      );
    }
    this.setState({ errorTab: errorTab });
    let pathurl = "";
    let type = "POST";
    if (formData.id === "") {
      pathurl = "/addPerson";
    } else {
      pathurl = "/updatePerson/".concat(formData.id);
      type = "PUT";
    }
    $.ajax(this.url.concat(pathurl), {
      type: type,
      data: JSON.stringify(this.state.formData),
      contentType: "false",
      dataType: "json",
      processData: "false",
      crossDomain: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      xhrFields: {
        withCredentials: false,
      },
    })
      .done((data, responseStatus, xhr) => {
        if (xhr.status === 201 || xhr.status === 200) {
          this.getListPerson();
          this.setState({ formData: { name: "", age: "", id: "" } });
        } else {
          errorTab.push(xhr.statusText);
          this.setState({ errorTab: errorTab });
        }
      })
      .fail((error) => {
        console.log("error");
      });
  }

  handleEdit(id) {
    const personele = this.state.persons.filter((p) => id === p.id).pop();
    this.setState({ formData: personele });
  }

  handleDelete(id) {
    const errorTab = this.state.errorTab;
    $.ajax(this.url.concat("/deletePerson/").concat(id), {
      type: "DELETE",
      contentType: "false",
      dataType: "json",
      processData: "false",
      crossDomain: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      xhrFields: {
        withCredentials: false,
      },
    })
      .done((data, responseStatus, xhr) => {
        if (xhr.status === 200) {
          this.getListPerson();
        } else {
          errorTab.push(xhr.statusText);
          this.setState({ errorTab: errorTab });
        }
      })
      .fail((error) => {
        console.log("error");
      });
  }

  getListPerson() {
    $.getJSON(this.url.concat("/listPerson"))
      .done((data) => {
        this.setState({ persons: data.listPerson });
      })
      .fail((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <span>
          <FormPerson
            formPersons={this.state}
            onRemplace={this.handleChange}
            onEnvoye={this.handleSubmit}
          />
        </span>
        <span>
          <ListPerson
            formPersons={this.state}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        </span>
      </div>
    );
  }
}

export default Persons;
