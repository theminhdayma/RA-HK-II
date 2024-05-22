import React, { useState } from "react";
import ModalError from "../Modal/ModalError";
import ModalCoincide from "../Modal/ModalCoincide";

interface Job {
  id: number;
  name: string;
  status: boolean;
}

interface AddCreateJobProps {
  addJob: (job: Job) => void;
  jobLocal: Job[];
}

export default function AddCreateJob({ addJob, jobLocal }: AddCreateJobProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [showErrorBlank, setShowErrorBlank] = useState<boolean>(false);
  const [showErrorCoincide, setShowErrorCoincide] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowErrorCoincide(false);
  };

  const handleCreateJob = () => {
    if (inputValue === "") {
      setShowErrorBlank(true);
      return;
    }
    const isDuplicate = jobLocal.some((job) => job.name === inputValue);

    if (isDuplicate) {
      setShowErrorCoincide(true);
      setInputValue("");
      return;
    }
    const job: Job = {
      id: Math.floor(Math.random() * 9999999999),
      name: inputValue,
      status: false,
    };

    addJob(job);
    setInputValue("");
    setShowErrorBlank(false);
    setShowErrorCoincide(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          id="form2"
          className="form-control"
        />
        <label className="form-label">Nhập tên công việc</label>
      </div>
      <button
        onClick={handleCreateJob}
        type="submit"
        className="btn btn-info ms-2"
      >
        Thêm
      </button>
      {showErrorBlank && (
        <ModalError onClose={() => setShowErrorBlank(false)} />
      )}
      {showErrorCoincide && (
        <ModalCoincide onClose={() => setShowErrorCoincide(false)} />
      )}
    </div>
  );
}
