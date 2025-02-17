import { useState, useEffect } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import Contactdetail from "./components/ContactDetail";
import Delete from "./components/Delete";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "sher";

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const addContactHandler = (contact) => {
    const updatedContacts = [...contacts, { id: uuidv4(), ...contact }];
    setContacts(updatedContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" element={<Contactdetail />} />
          
          {/* 🔹 Use ":id" to pass contact ID */}
          <Route path="/delete/:id" element={<Delete removeContactHandler={removeContactHandler} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
