import React, { Component } from "react";
import "./Shop.scss";
import SHOP_DATA from "../../data/shop.data";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
