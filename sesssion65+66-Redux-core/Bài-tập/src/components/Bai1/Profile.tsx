import { useSelector } from "react-redux";

export default function Profile() {
  const stateProfile: any = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <ul>
        <li>ID: {stateProfile.reducerProfile.id}</li>
        <li>Họ và Tên: {stateProfile.reducerProfile.name}</li>
        <li>giới tính: {stateProfile.reducerProfile.sex}</li>
        <li>Ngày sinh: {stateProfile.reducerProfile.dateOfBirth}</li>
        <li>Địa chỉ: {stateProfile.reducerProfile.address}</li>
      </ul>
    </div>
  );
}
