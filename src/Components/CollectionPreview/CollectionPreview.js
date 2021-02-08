import React from "react";
import CollectionItem from "./Collection-item";
import { CollectionPreviewContainer } from "./CollectionPreview.styles";

function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
