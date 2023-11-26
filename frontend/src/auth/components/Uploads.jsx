import React, { memo, useRef, useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input } from "antd";
import { PropTypes } from "prop-types";
import { styled } from "styled-components";

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
    if (typeof data === "string") {
      if (data) {
        const arr = [];
        arr.push(data);
        return (
          <div className="preview">
            <div className="infor">
              <Image src={arr[0]} height={80} />
            </div>
          </div>
        );
      }
    } else {
      return data?.map(
        (item) =>
          item && (
            <div className="preview" key={item}>
              <div className="infor">
                <Image src={item} height={80} />
              </div>
            </div>
          ),
      );
    }
  };

  const Content = () => {
    return (
      <Wrapper>
        {data && filesUrl.length <= 0 && <PreviewsData />}
        {filesUrl.length > 0 && <PreviewsURL />}
      </Wrapper>
    );
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
  data: PropTypes.array,
  onDeleteData: PropTypes.func,
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
`;

export default memo(Uploads);
