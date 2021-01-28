import React from "react";
import "./Directory.scss";
import MenuItem from "../Menu-item/Menu-item";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/Directory/directory.selector";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
