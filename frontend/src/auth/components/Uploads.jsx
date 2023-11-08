import React, { memo, useEffect, useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input } from "antd";
import { PropTypes } from "prop-types";

const Uploads = (props) => {
  const { label, name, required, multiple, onGetFiles, data } = props;
  const [filesUrl, setFilesUrl] = useState([]);
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    multiple && setFiles([]) && setFilesUrl([]);
    const arr = [];
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

  useEffect(() => {
    return () => {
      filesUrl.length > 0 &&
        filesUrl.map((file) => URL.revokeObjectURL(file.url));
    };
  }, [filesUrl]);

  const btnUpload = (
    <Button
      className="btn-upload"
      onClick={(e) => e.currentTarget.lastElementChild.click()}
    >
      <PlusOutlined />
      <span>Upload</span>
      <Input
        type="file"
        hidden
        accept="image/*"
        multiple={multiple}
        onChange={handleChange}
      />
    </Button>
  );

  return (
    <Form.Item
      label={label}
      name={name}
      rules={
        required ? [{ required: true, message: "Image not valid!" }] : false
      }
      className="form-upload"
    >
      {(filesUrl.length <= 0 &&
        data &&
        data.length &&
        data?.map((item) => (
          <div className="preview" key={item}>
            <div className="infor">
              <Image src={item.img} height={80} />
            </div>
          </div>
        ))) ||
        (filesUrl.length <= 0 && data && !data.length && (
          <div className="preview" key={data?._id}>
            <div className="infor">
              <Image src={data?.banner} height={80} />
            </div>
          </div>
        ))}
      {filesUrl.length > 0 &&
        filesUrl.map((item, idx) => (
          <div className="preview" key={item.url}>
            <div className="infor">
              <Image src={item.url} height={80} />
              <a href={item.url}>{item.name}</a>
            </div>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(idx)}
            />
          </div>
        ))}
      {multiple && btnUpload}
      {!multiple && (files.length >= 1 ? null : btnUpload)}
    </Form.Item>
  );
};
Uploads.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  onGetFiles: PropTypes.func,
  data: PropTypes.array,
};

export default memo(Uploads);
