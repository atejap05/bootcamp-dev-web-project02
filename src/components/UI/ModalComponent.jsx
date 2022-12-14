import React from "react";
import { Modal } from "antd";

const ModalComponent = ({ children, showModal, toggleModal, title }) => {
  const handleOk = () => {
    toggleModal(false);
  };

  const handleCancel = () => {
    toggleModal(false);
  };

  return (
    <>
      <Modal
        title={title}
        open={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};
export default ModalComponent;
