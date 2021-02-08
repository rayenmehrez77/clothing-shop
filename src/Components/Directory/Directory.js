import React from "react";
import MenuItem from "../Menu-item/Menu-item";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/Directory/directory.selector";
import { connect } from "react-redux";
import { DirectoryContainer } from "./Directory.styles";

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
