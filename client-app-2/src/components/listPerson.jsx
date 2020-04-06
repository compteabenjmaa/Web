import React, { Component } from "react";

class ListPerson extends Component {
  render() {
    const { formPersons, onEdit, onDelete } = this.props;
    if (formPersons.persons.length === 0) {
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
              {formPersons.persons.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mr-2 w-25"
                      onClick={() => onEdit(p.id)}
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
                      onClick={() => onDelete(p.id)}
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
}

export default ListPerson;
