import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";

const ModalComponent = ({ children, showModal, toggleModal }) => {
  const handleOk = () => {
    toggleModal(false);
  };
  const handleCancel = () => {
    toggleModal(false);
  };

  return (
    <>
      <Modal
        title="Type Username and Password"
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
