import React from "react";
import { selectCollections } from "../../redux/shop/shop.selector";
import "./CollectionPage.scss";
import { connect } from "react-redux";
import CollectionItem from "../../Components/CollectionPreview/Collection-item";

function CollectionPage({ collections, match }) {
  const { title, items } = collections;
  console.log(collections, match);
  return (
    <div className="collection-page">
      <h1>{title}</h1>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem item={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
