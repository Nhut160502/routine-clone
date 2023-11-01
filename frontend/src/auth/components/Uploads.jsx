import React, { memo, useEffect, useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Image, Modal, Upload } from "antd";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result + "");
    reader.onerror = (error) => reject(error);
  });

const Uploads = (props) => {
  const { multiple, onGetFiles } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [filesUrl, setFilesUrl] = useState([]);
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    multiple && setFiles([]) && setFilesUrl([]);
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const url = URL.createObjectURL(file);
      setFiles((pre) => [...pre, file]);
      setFilesUrl((pre) => [...pre, { name: file.name, url: url }]);
    }
  };
  console.log(filesUrl);
  return (
    <Wrapper>
      {filesUrl.length > 0 &&
        filesUrl.map((item, idx) => (
          <div className="preview" key={item.url}>
            <div className="infor">
              <Image src={item.url} height={80} />
              <a href={item.url}>{item.name}</a>
            </div>
            <Button icon={<DeleteOutlined />} />
          </div>
        ))}
      <Button
        className="btn-upload"
        onClick={(e) => e.currentTarget.lastElementChild.click()}
      >
        <PlusOutlined />
        <span>Upload</span>
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleChange}
          multiple={multiple}
        />
      </Button>
    </Wrapper>
  );
};
Uploads.propTypes = {
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  onGetFiles: PropTypes.func,
};

const Wrapper = styled.div`
  > button {
    display: flex;
    align-items: center;
  }
  .preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin-bottom: 12px;
    .infor {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    > button {
      background-color: transparent;
      border: none;
    }
  }
`;

export default memo(Uploads);
