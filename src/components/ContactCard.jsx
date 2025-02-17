import React from "react";
import user from "../assets/images.png";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      {/* 🔹 Link to Delete Confirmation Page */}
      <Link to={`/delete/${id}`} state={{ contact }}>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
