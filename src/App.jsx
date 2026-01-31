import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import DetailContact from "./Components/DetailContact";
import EditContact from "./Components/EditContact";


const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const isFirstRender = useRef(true);
  //  Load contacts from localStorage
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) setContacts(storedContacts);
  }, []);

  //  Save contacts to localStorage
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(contacts)
    );
  }, [contacts]);

  //  Search handler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        const contentToSearch = (
          contact.name +
          " " +
          contact.email
        ).toLowerCase();
        return contentToSearch.includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  //  Add contact
  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: uuidv4() }]);
  };

  //  Update contact
  const updateContactHandler = (contact) => {
    setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
  };

  //  Remove contact
  const removeContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contact={searchTerm.length < 1 ? contacts : searchResult}
              getContactId={removeContactHandler}
              term={searchTerm}
              searchKey={searchHandler}
            />
          }
        />

        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />

        <Route
          path="/contact/:id"
          element={<DetailContact contacts={contacts} />}
        />

        <Route
          path="/edit"
          element={<EditContact updateContactHandler={updateContactHandler} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
