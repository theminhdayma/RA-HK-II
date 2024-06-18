import { useDispatch, useSelector } from "react-redux";
import { actionJob } from "../actions";

export default function Job() {
  const stateJob: any = useSelector((state) => {
    // không dùng setState trong useSelector
    return state;
  });

  const dispatch = useDispatch();
  const AddJob = () => {
    let newJob = {
        id: 2,
        name: "Minh Sâm",
        status: false
    }
    dispatch(actionJob("ADD", newJob));
  };

  return (
    <div>
      Job
      {stateJob.reducerJob.map((job: any) => (
        <li>{job.name}</li>
      ))}
      <button onClick={AddJob}>Add Job</button>
    </div>
  );
}
