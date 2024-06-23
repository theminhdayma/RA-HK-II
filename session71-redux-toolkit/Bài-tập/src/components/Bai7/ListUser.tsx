import { useDispatch, useSelector } from "react-redux";
import { User, toggleUserStatus } from "../../store/reducers/Bai7/listUser";
import { HeartOutlined } from "@ant-design/icons";

export default function ListUser() {
  const userList: any = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-3xl">List Favorites User</h1>
      <div className="flex-col gap-5">
        {userList.showListUser.map((item: User, index: number) => (
          <div className="flex-col gap-5" key={index}>
            <div>UserName: {item.name}</div>
            <div>
              Favorites:{" "}
              <HeartOutlined
                className={`${
                  item.status === true ? "text-red-600" : "text-black"
                }`}
                onClick={() => dispatch(toggleUserStatus(index))}
              />
            </div>
            <div className="w-[300px] h-[2px] bg-gray-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
