import React from "react";
import "./Directory.scss";
import { sections } from "../../directory.data";
import MenuItem from "../Menu-item/Menu-item";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
