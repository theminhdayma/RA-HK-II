import React, { useState } from "react";

interface Job {
  id: number;
  name: string;
  status: boolean;
}

interface Props {
  job: Job;
  onClose: () => void;
  onSave: (id: number, newName: string) => void;
}

export default function UpdateJob({ job, onClose, onSave }: Props) {
  const [newName, setNewName] = useState<string>(job.name);

  const handleSave = () => {
    onSave(job.id, newName);
  };

  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5 style={{ color: "red" }}>Nhập Công Việc: </h5>
          <i className="fas fa-xmark" onClick={onClose}></i>
        </div>
        <div className="modal-body-custom">
          <input
            className="newJob"
            placeholder="Nhập công việc"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="modal-footer-footer">
          <button className="btn btn-light saveJob" onClick={handleSave}>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
