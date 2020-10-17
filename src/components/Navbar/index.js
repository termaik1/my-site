import React from "react";
import { Link } from "react-router-dom";

import _ from "lodash";

import "./Navbar.scss";

const dataLink = [
  {
    text: "Главная страница",
    path: "/",
  },
  {
    text: "Мои достижения",
    path: "/progress",
  },
  {
    text: "Методичесие материалы",
    path: "/materials",
  },
  {
    text: "Мои проекты",
    path: "/my-projects"
  }
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__content-info">Морозкин Денис</div>
        <hr />
        <div className="navbar__content-link">
          {_.map(dataLink, (link) => (
            <Link to={link.path}>{link.text}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
