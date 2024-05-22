import React from "react";

interface ModalDeleteProps {
  jobName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ModalDelete({
  jobName,
  onCancel,
  onConfirm,
}: ModalDeleteProps) {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5>Xác nhận</h5>
          <i className="fas fa-xmark" onClick={onCancel}></i>
        </div>
        <div className="modal-body-custom">
          <p>Bạn chắc chắn muốn xóa công việc {jobName}?</p>
        </div>
        <div className="modal-footer-footer">
          <button className="btn btn-light" onClick={onCancel}>
            Hủy
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
