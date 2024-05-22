import React, { useReducer, useEffect, useState } from "react";
import Navbar from "./Render/Navbar";
import RenderWord from "./Render/RenderWord";
import AddCreateJob from "./AddCreate/AddCreateJob";
import ModalDelete from "./Modal/ModalDelete";

interface Job {
  id: number;
  name: string;
  status: boolean;
}

type JobState = Job[];

type JobAction =
  | { type: "ADD_JOB"; payload: Job }
  | { type: "UPDATE_JOB_STATUS"; payload: number }
  | { type: "DELETE_JOB"; payload: number }
  | { type: "UPDATE_JOB"; payload: { id: number; newName: string } }
  | { type: "SET_JOBS"; payload: Job[] };

const jobReducer = (state: JobState, action: JobAction): JobState => {
  switch (action.type) {
    case "ADD_JOB":
      return [...state, action.payload];
    case "UPDATE_JOB_STATUS":
      return state.map((job) =>
        job.id === action.payload ? { ...job, status: !job.status } : job
      );
    case "DELETE_JOB":
      return state.filter((job) => job.id !== action.payload);
    case "UPDATE_JOB":
      return state.map((job) =>
        job.id === action.payload.id
          ? { ...job, name: action.payload.newName }
          : job
      );
    case "SET_JOBS":
      return action.payload;
    default:
      return state;
  }
};

export default function Index() {
  const [jobLocal, dispatch] = useReducer(jobReducer, [], () => {
    const listJobLocal = localStorage.getItem("jobs");
    return listJobLocal ? JSON.parse(listJobLocal) : [];
  });
  const [filter, setFilter] = useState<string>("all");
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobLocal));
  }, [jobLocal]);

  const addJob = (job: Job) => {
    dispatch({ type: "ADD_JOB", payload: job });
  };

  const updateJobStatus = (id: number) => {
    dispatch({ type: "UPDATE_JOB_STATUS", payload: id });
  };

  const deleteJob = (id: number) => {
    dispatch({ type: "DELETE_JOB", payload: id });
    setShowDeleteModal(false);
  };

  const updateJob = (id: number, newName: string) => {
    dispatch({ type: "UPDATE_JOB", payload: { id, newName } });
  };

  const filteredJobs = jobLocal.filter((job) => {
    if (filter === "completed") {
      return job.status;
    } else if (filter === "incomplete") {
      return !job.status;
    } else {
      return true;
    }
  });

  const handleDeleteClick = (job: Job) => {
    setJobToDelete(job);
    setShowDeleteModal(true);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <AddCreateJob addJob={addJob} jobLocal={jobLocal} />
                <Navbar filter={filter} setFilter={setFilter} />
                <div className="tab-content" id="ex1-content">
                  <div className="tab-pane fade show active">
                    <RenderWord
                      jobLocal={filteredJobs}
                      updateJobStatus={updateJobStatus}
                      deleteJob={handleDeleteClick}
                      updateJob={updateJob}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && jobToDelete && (
        <ModalDelete
          jobName={jobToDelete.name}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => deleteJob(jobToDelete.id)}
        />
      )}
    </section>
  );
}
