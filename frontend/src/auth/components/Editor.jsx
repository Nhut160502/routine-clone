import React from "react";
import JoditEditor from "jodit-react";
import { editorConfig } from "../configs";
import { PropTypes } from "prop-types";
const Editor = (props) => {
  const { handleGetData, data } = props;

  return (
    <div
      className="App"
      style={{ maxWidth: editorConfig.width, margin: "0 auto" }}
    >
      <JoditEditor
        value={data || ""}
        config={editorConfig}
        onChange={(value) => {
          handleGetData(value);
        }}
      />
    </div>
  );
};

Editor.propTypes = {
  handleGetData: PropTypes.func,
  data: PropTypes.string,
};

export default Editor;
