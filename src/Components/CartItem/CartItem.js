import React from "react";
import { CartItemDetailsContainer, CartItemContainer } from "./CartItem.styles";

function CartItem({ item }) {
  const { imageUrl, name, price, quantity } = item;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <CartItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
