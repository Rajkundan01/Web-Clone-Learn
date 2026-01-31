import React from "react";
import { useParams, Link } from "react-router-dom";

const DetailContact = ({ contacts }) => {
  const { id } = useParams();

  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return <h3>Contact not found</h3>;
  }

  return (
    <div className="main ">
      <div className="card mx-3 bg-info bg-opacity-10" style={{ width: "12rem"}}>
        <img
          src="/image02-detail.png"
          className="card-img-top"
          alt="user"
        />

        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <p className="card-text">{contact.name}</p>
          <p className="card-text">{contact.email}</p>

          <Link to="/" className="btn btn-primary">
            Back to Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailContact;