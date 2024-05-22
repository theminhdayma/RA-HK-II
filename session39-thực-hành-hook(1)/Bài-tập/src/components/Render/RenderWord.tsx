import React from "react";
import Icon from "../Button/Icon";

interface Job {
  id: number;
  name: string;
  status: boolean;
}

interface RenderWordProps {
  jobLocal: Job[];
  updateJobStatus: (id: number) => void;
  deleteJob: (job: Job) => void;
  updateJob: (id: number, newName: string) => void;
}

export default function RenderWord({
  jobLocal,
  updateJobStatus,
  deleteJob,
  updateJob,
}: RenderWordProps) {
  const handleEdit = (id: number, currentName: string) => {
    const newName = prompt("Enter the new job name:", currentName);
    if (newName && newName.trim() !== "") {
      updateJob(id, newName);
    }
  };

  return (
    <ul className="list-group mb-0">
      {jobLocal.map((job) => (
        <li
          key={job.id}
          className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
          style={{ backgroundColor: "#f4f6f7" }}
        >
          <div>
            <input
              onChange={() => updateJobStatus(job.id)}
              className="form-check-input me-2"
              type="checkbox"
              checked={job.status}
              value={job.name}
            />
            {job.status ? <s>{job.name}</s> : <span>{job.name}</span>}
          </div>
          <Icon
            canEdit={!job.status}
            onEdit={() => handleEdit(job.id, job.name)}
            onDelete={() => deleteJob(job)}
          />
        </li>
      ))}
    </ul>
  );
}
