import "./Modal.css";
import React from "react";
type ModalProps = {
  contents: React.ReactNode;
  title: string;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({
  contents,
  title,
  closeModal,
}: ModalProps) => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalControls">
          <div className="controlSection">
            <a onClick={closeModal} className="close">
              &times;
            </a>
          </div>
          <div className="controlSection">
            <h1>{title}</h1>
          </div>
          <div className="controlSection"></div>
        </div>
        <div className="modalContent">{contents}</div>
      </div>
    </div>
  );
};

export default Modal;
