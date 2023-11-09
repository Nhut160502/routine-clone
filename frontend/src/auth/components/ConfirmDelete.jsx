import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { confirmDelete, disActiveModal } from "../providers/modalSlice";

const ConfirmDelete = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state?.modal);

  const handleOk = async () => {
    dispatch(confirmDelete());
    const handle = modal.handle;
    await handle();
    dispatch(disActiveModal());
  };

  const handleCancel = () => {
    dispatch(disActiveModal());
  };

  const Title = () => {
    return (
      <div className="title-modal-custom">
        <img
          src="https://pnghq.com/wp-content/uploads/warning-sign-png-free-images-with-transparent-background-2-96829.png"
          alt=""
        />
        <span>Warning</span>
      </div>
    );
  };

  return (
    <>
      <Modal
        title={<Title />}
        open={modal?.active}
        onOk={handleOk}
        confirmLoading={modal?.loading}
        onCancel={handleCancel}
      >
        <p>
          Dũ liệu sẽ được xóa vĩnh viển và không thể khôi phục. Bạn vẩn muốn
          tiếp tục?
        </p>
      </Modal>
    </>
  );
};

export default ConfirmDelete;
