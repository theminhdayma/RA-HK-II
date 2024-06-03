import { Route, Routes } from "react-router-dom";
import Team from "./Team";
import TeamsIndex from "./TeamsIndex";

export default function Teams() {
  return (
    <div>
      <h1>Teams Page</h1>
      <Routes>
        <Route index element={<TeamsIndex />} />
        <Route path=":teamId" element={<Team />} />
      </Routes>
    </div>
  );
}
