import React from "react";
import { Link } from "react-router-dom";

const AdminCard = ({ icon, iconColor, title, description, buttonColor, linkTo }) => {
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content center">
          <i className={`material-icons large ${iconColor}`}>{icon}</i>
          <span className="card-title">{title}</span>
          <p>{description}</p>
        </div>
        <div className="card-action center">
          <Link to={linkTo} className={`btn ${buttonColor}`}>
            Ir a {title.toLowerCase()}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
