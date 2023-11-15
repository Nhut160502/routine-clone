import React, { memo, useEffect, useRef, useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input } from "antd";
import { PropTypes } from "prop-types";

const Uploads = (props) => {
  const { label, name, multiple, onGetFiles, data } = props;

  const refInput = useRef();
  const [filesUrl, setFilesUrl] = useState([]);
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    refInput.current.value = null;
    const arr = [];
    files.map((file) => arr.push(file));
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const url = URL.createObjectURL(file);
      setFiles((pre) => [...pre, file]);
      setFilesUrl((pre) => [...pre, { name: file.name, url: url }]);
      arr.push(file);
    }
    onGetFiles && onGetFiles(arr);
  };
  const handleDelete = (idx) => {
    setFiles(files.filter((item, index) => index !== idx));
    setFilesUrl(filesUrl.filter((item, index) => index !== idx));
    onGetFiles && onGetFiles(files.filter((item, index) => index !== idx));
  };

  const ButtonUpload = () => {
    return (
      <Button
        className="btn-upload"
        onClick={(e) => e.currentTarget.lastElementChild.click()}
      >
        <PlusOutlined />
        <span>Upload</span>
        <Input
          ref={refInput}
          type="file"
          hidden
          accept="image/*"
          multiple={multiple}
          onChange={handleChange}
        />
      </Button>
    );
  };

  const PreviewsURL = () => {
    return filesUrl.map((item, idx) => {
      return (
        <div className="preview" key={item.url}>
          <div className="infor">
            <Image src={item.url} height={80} />
            <a href={item.url}>{item.name}</a>
          </div>
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(idx)} />
        </div>
      );
    });
  };

  const PreviewsData = () => {
    if (typeof data === "string")
      return (
        <div className="preview" key={data?._id}>
          <div className="infor">
            <Image src={data} height={80} />
          </div>
        </div>
      );
    else
      return data.map((item) => {
        return (
          <div className="preview" key={item}>
            <div className="infor">
              <Image src={item} height={80} />
            </div>
          </div>
        );
      });
  };

  const Content = () => {
    if (data && filesUrl.length <= 0) return <PreviewsData />;
    else if (filesUrl.length > 0) return <PreviewsURL />;
  };

  return (
    <Form.Item label={label} name={name} className="form-upload">
      <Content />
      {multiple && <ButtonUpload />}
      {!multiple && (files.length >= 1 ? null : <ButtonUpload />)}
    </Form.Item>
  );
};
Uploads.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  onGetFiles: PropTypes.func,
  data: PropTypes.array || PropTypes.string,
};

export default memo(Uploads);
