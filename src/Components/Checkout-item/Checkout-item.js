import React from "react";
import { connect } from "react-redux";
import {
  AddItem,
  clearItemFromCart,
  RemoveItem,
} from "../../redux/cart/cart.actions";
import { CheckoutContainer, ImageContainer } from "./CheckoutItem.styles";

function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CheckoutContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove" onClick={() => clearItem(cartItem)}>
        &#10006;
      </span>
    </CheckoutContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(AddItem(item)),
  removeItem: (item) => dispatch(RemoveItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
