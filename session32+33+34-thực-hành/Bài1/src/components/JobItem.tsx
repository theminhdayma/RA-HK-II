import React, { useState } from "react";

type Job = {
  id: string;
  name: string;
  status: boolean;
};

type JobItemProps = {
  job: Job;
  handleChangeStatus: (id: string) => void;
  handleClickDelete: (id: string) => void;
  handleClickUpdate: (id: string) => void;
};

export default function JobItem({
  job,
  handleChangeStatus,
  handleClickDelete,
  handleClickUpdate,
}: JobItemProps) {
  // Trạng thái lưu trữ nội dung công việc cần chỉnh sửa
  const [inputUpdate, setInputUpdate] = useState<string>("");

  const handleChecked = (id: string) => {
    // Truyền id lên component cha để thay đổi trạng thái
    handleChangeStatus(id);
  };

  const handleDelete = (id: string) => {
    // Truyền id lên component cha để xóa
    handleClickDelete(id);
  };

  const handleUpdate = (id: string) => {
    handleClickUpdate(id);
  };
  return (
    <>
      <li key={job.id}>
        <input
          onChange={() => handleChecked(job.id)}
          type="checkbox"
          id="task1"
          checked={job.status}
        />
        <label htmlFor="task1">
          {job.status ? <s>{job.name}</s> : <p>{job.name}</p>}
        </label>
        <button onClick={() => handleDelete(job.id)}>Delete</button>
        {!job.status && (
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => handleUpdate(job.id)}
          >
            Edit
          </button>
        )}
      </li>
    </>
  );
}
