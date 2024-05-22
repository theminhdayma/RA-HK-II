// ModalCoincide.tsx
import React from "react";

interface ModalCoincideProps {
  onClose: () => void;
}

export default function ModalCoincide({ onClose }: ModalCoincideProps) {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5 style={{ color: "red" }}>Cảnh báo</h5>
          <i className="fas fa-xmark" onClick={onClose}></i>
        </div>
        <div className="modal-body-custom">
          <p>Tên công việc không được phép trùng nhau.</p>
        </div>
        <div className="modal-footer-footer">
          <button className="btn btn-light" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
