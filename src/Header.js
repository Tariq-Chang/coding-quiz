import "./Header.css";
import React from "react";
import { Avatar } from "@material-ui/core";

function Header({ user }) {
  return (
    <div className="header">
      <div className="header__profile">
        <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
        <h3>{user}</h3>
      </div>
      <div className="header__title">
        <h1>Programming Quiz Game</h1>
      </div>
    </div>
  );
}

export default Header;
