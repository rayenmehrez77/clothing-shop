import React from "react";
import { AddItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import {
  CollectionItemStyles,
  ImageContainer,
  CollectionFooter,
} from "./CollectionItem.styles";

function CollectionItem({ item, AddItem }) {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemStyles>
      <ImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooter>
      <CustomButton inverted onClick={() => AddItem(item)}>
        Add To Cart
      </CustomButton>
    </CollectionItemStyles>
  );
}

const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
