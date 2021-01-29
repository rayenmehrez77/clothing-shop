import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeCheckoutButton.scss";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IErsIISuNjuqBxiuqS13GpyhXGon1RXTR158x7pC2lJTMkB1qaEsa1a01ApoFSObKhXfTrRFKDejXoFVpbHfb9L00ezxPM44z";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      name="CRWN CLOTHING"
      image="https://sendeyo.com/up/d/f3eb2117da"
      label="Pay now with card"
      description={`Your total is $${price}`}
      shippingAddress
      billingAddress
      amount={priceForStripe}
      currency="USD"
      email="rayenmehrez28@gmail.com"
      panelLabel="Give Money"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
