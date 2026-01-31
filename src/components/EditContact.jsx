import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import withRouter from "../utils/WithRouter";

class EditContact extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    redirect: false,
  };

  componentDidMount() {
    const contact = this.props.location.state?.contact;
    if (contact) {
      this.setState({
        id: contact.id,
        name: contact.name,
        email: contact.email,
      });
    }
  }

  submit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.email) {
      alert("Please fill the form!");
      return;
    }

    this.props.updateContactHandler(this.state);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Navigate to="/" />;

    return (
      <div className="d-flex flex-column align-items-center">

        <form onSubmit={this.submit} className="container  d-flex flex-column justify-content-center align-items-center border rounded p-3 w-50 bg-info bg-opacity-10">
        <h2 className="mb-">Edit Contact</h2>
          <div className="my-3 d-flex gap-2 align-items-center">
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
          <div className="d-flex ">
            <button to='/' className="btn btn-primary mx-5">cancel</button>
          <button className="btn btn-primary">Update</button>
          </div>
        
        </form>
      </div>
    );
  }
}

export default withRouter(EditContact);
