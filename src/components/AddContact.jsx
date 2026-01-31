import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    redirect: false,
  };

  submit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.email) {
      alert("Please fill the form!");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Navigate to="/" />;

    return (
      <div className="d-flex flex-column align-items-center ">
  
        <form onSubmit={this.submit} className="container mt-3 d-flex flex-column justify-content-center align-items-center border rounded p-3 w-50 bg-info bg-opacity-10">
        <h2>Add Contact</h2>
          <div className="mb-3 d-flex gap-2 align-items-center mt-2">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "300px" }}
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="mb-3 d-flex gap-2 align-items-center">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              style={{ maxWidth: "300px" }}
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
          
        </form>
      </div>
    );
  }
}

export default AddContact;
