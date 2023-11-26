import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { editorConfig } from "../configs";
import { PropTypes } from "prop-types";
const Editor = (props) => {
  const { handleGetData, value } = props;
  const [data, setData] = useState(value || "");

  return (
    <div
      className="App"
      style={{ maxWidth: editorConfig.width, margin: "0 auto" }}
    >
      <JoditEditor
        value={data}
        config={editorConfig}
        onChange={(value) => {
          setData(value);
          handleGetData(value);
        }}
      />
    </div>
  );
};

Editor.propTypes = {
  handleGetData: PropTypes.func,
  value: PropTypes.string,
};

export default Editor;
