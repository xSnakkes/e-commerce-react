import React from "react";
import { AiOutlineShopping } from "react-icons/ai"

export default function Header() {
  return (
    <div className="header__items">
      <div className="header__logo">
        <span className="header__text">House Staff</span>
      </div>
      <ul className="nav">
        <li className="nav__items">About us</li>
        <li className="nav__items">Contacts</li>
        <li className="nav__items">Account</li>
      </ul>
      <AiOutlineShopping />
    </div>
  );
}
