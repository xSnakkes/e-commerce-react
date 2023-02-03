import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2 className="text__empty">your basket is empty </h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
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
      <div className="shop__card">
        <AiOutlineShopping
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop__button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop__cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
    </div>
  );
}
