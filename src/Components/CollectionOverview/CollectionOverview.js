import React from "react";
import "./CollectionOverview.scss";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

function CollectionOverview({ collections }) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
