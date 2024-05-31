import { useLocation } from "react-router-dom";

export default function UserDetail() {
  const location = useLocation();
  const user = location.state;

  return (
    <div>
      <h2>User Detail</h2>
      <ul>
        <li>Id: {user.id}</li>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Address: {user.address}</li>
      </ul>
    </div>
  );
}
