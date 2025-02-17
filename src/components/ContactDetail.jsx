import React from "react";
import { useLocation, Link } from "react-router-dom";
import user from "../assets/images.png";

const ContactDetail = () => {
  const location = useLocation();
  const contact = location.state?.contact; // ✅ Prevents undefined error

  if (!contact) {
    return (
      <div className="main">
        <h2>Contact not found</h2>
        <Link to="/">
          <button className="ui button blue">Back to Contact List</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
          <div className="header">{contact.id}</div>
        </div>
      </div>
      <div className="center-div" style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/">
          <button className="ui button blue">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
