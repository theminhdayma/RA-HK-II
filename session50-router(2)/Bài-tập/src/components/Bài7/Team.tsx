import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();

  return (
    <div>
      <h2>Team {teamId} Detail Page</h2>
    </div>
  );
}
