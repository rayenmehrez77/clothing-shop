import React from "react";
import "./Checkout.scss";
import {
  selectCartItemTotal,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../Components/Checkout-item/Checkout-item";
import { RemoveItem } from "../../redux/cart/cart.actions";

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product </span>
        </div>
        <div className="header-block">
          <span>Description </span>
        </div>
        <div className="header-block">
          <span>Quantity </span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <div className="total">
        {!total ? (
          <h6 className="total__empty">Your cart is empty</h6>
        ) : (
          <span>TOTAL: ${total}</span>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
