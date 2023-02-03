import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
        <div className="cart__item">
            <div className="cart__img">
                <img src={"./img/" + this.props.item.img} alt="" />
            </div>
            <div className="cart__info">
                <h2 className="cart__title">{this.props.item.title}</h2>
                <div className="cart__price">{this.props.item.price}$</div>
            </div>
        </div>
    );
  }
}

export default Order;
