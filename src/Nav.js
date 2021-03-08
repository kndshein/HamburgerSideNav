import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const Nav = (props) => {
  return (
    <div className={`nav-bar ${props.nav ? "active" : ""}`}>
      <div onClick={() => props.handleClick()} className="close-btn">
        <RiCloseCircleFill size={30} color={"rgb(88, 41, 19)"} />
      </div>
      <ol>
        <li>Bun</li>
        <li>Sauces</li>
        <li>Tomato</li>
        <li>Lettuce</li>
        <li>Cheese</li>
        <li>Patty</li>
        <li>Bun</li>
      </ol>
    </div>
  );
};

export default Nav;
