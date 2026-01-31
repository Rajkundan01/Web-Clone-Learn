import React from "react";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div key={id} className="card mb-2 border-primary mt-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between gap-2">
          <img src="/user-image01.png" className="user-img " alt="user" />
          <div>
            <Link to={`/contact/${id}`}>
              <h6 className="mb-1">{name}</h6>
              <small className="text-muted">{email}</small>
            </Link>
          </div>
        </div>
        <div>
          <Link
            to="/edit"
            state={{ contact: props.contact }}
            className="btn btn-primary btn-sm mx-3">
            Edit
          </Link>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => props.clickHandler(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
