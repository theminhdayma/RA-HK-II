import { useState } from "react";
import "./ListUser.css";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

export default function ListUser() {
  const [listUser, setListUser] = useState<User[]>([
    {
      id: 1,
      name: "Nguyễn Thế Minh",
      email: "theminh2005zgmail.com",
      address: "Hà Nội",
    },
    {
      id: 2,
      name: "Trần Thị Minh Sâm",
      email: "minhsam280706@gmail.com",
      address: "Hà Nội",
    },
    {
      id: 3,
      name: "Trần Nho Hà",
      email: "nhoha0101@gmail.com",
      address: "Hà Nội",
    },
  ]);
  let navigate = useNavigate();
  const handleClick = (user: User) => {
    navigate("/UserDetail", { state: user });
  };
  return (
    <div className="listUser">
      {listUser.map((item, index) => (
        <ul key={index}>
          <li>Id: {item.id}</li>
          <li>UserName: {item.name}</li>
          <li>Email: {item.email}</li>
          <li>Address: {item.address}</li>
          <li className="li">
            <button onClick={() => handleClick(item)}>Xem chi tiết</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
