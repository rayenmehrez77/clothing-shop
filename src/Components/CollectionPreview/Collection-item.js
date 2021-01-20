import React from "react";
import { AddItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import "./Collection-item.scss";

function Collection({ item, AddItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => AddItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(Collection);
