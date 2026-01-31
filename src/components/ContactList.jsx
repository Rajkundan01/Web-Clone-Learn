import React,{ useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const inputElem = useRef("");
  const renderContactList = props.contact.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKey(inputElem.current.value);
  };
  return (
    <div className="mx-3 ">
      <div className="d-flex justify-content-between">
        <h3>Contact List</h3>
        {/* search bar */}
        <div className ="input-group w-50">
          <input
            type="text"
            className ="form-control"
            placeholder="Search"
            value={props.term}
            ref={inputElem}
            onChange={getSearchTerm}
          />
          <button type="button" className="input-group-text">
            <i className="bi bi-search"></i>
          </button>
        </div>
        {/* add contact */}
        <Link to="/add">
          <button className="btn btn-primary">Add Contact</button>
        </Link>
      </div>
      <div>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
