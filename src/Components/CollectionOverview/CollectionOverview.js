import React from "react";
import { CollectionOverviewContainer } from "./CollectionOverview.styles";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

function CollectionOverview({ collections }) {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </CollectionOverviewContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
