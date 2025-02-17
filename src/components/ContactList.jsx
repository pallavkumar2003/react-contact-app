import React from "react";
import ContactCard from "./ContactCard"; 
import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => {
  return (
    <>
      <div className="ui celled list">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
          
        ))}
        //sherni
      </div>
      console.log(key)
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
    </>
  );
};

export default ContactList;
