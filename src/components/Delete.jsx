import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Delete = (prop) => {
  const location = useLocation();
  const contact = location.state?.contact;
  const navigate = useNavigate();

  if (!contact) {
    return (
      <div>
        <h2>Contact not found</h2>
        <Link to="/">
          <button>Back to Contact List</button>
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    prop.removeContactHandler(contact.id); // 🔹 Call delete function
    navigate("/"); // 🔹 Redirect to home page after deletion
  };

  return (
    <div>
      <h2>Are you sure you want to delete this contact?</h2>
      <h3>{contact.name}</h3>
      <button onClick={handleDelete}>Yes</button>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
};

export default Delete;
