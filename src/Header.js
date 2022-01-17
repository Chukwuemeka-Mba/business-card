import React from "react";
import "./images/taleb.jpg";
function Header() {
  return (
    <div className="header">
      <div className="image">
        <img src={require("./images/taleb.jpg")} alt="" />
      </div>
    </div>
  );
}

export default Header;
