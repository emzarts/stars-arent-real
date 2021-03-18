import "./Modal.css";
import React from "react";
type ModalProps = {
  contents: React.ReactNode;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ contents, closeModal }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalControls">
          <a onClick={closeModal} className="close">
            &times;
          </a>
        </div>
        <div className="modalContent">{contents}</div>
      </div>
    </div>
  );
};

export default Modal;
