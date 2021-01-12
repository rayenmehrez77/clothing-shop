import React from "react";
import "./CollectionPreview.scss";
import Collection from "./Collection-item";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemsProps }) => (
            <Collection key={id} {...otherItemsProps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
