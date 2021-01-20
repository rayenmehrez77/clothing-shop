import React from "react";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import "./CardDropdown.scss";

function CardDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CardDropdown);
