import {
  DashboardOutlined,
  UserOutlined,
  MoneyCollectOutlined,
  LineChartOutlined,
  FileOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { isCheckShow } from "../../store/reducers/Bai5/baiTap5";

export default function BaiTap5() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        state.isCheckShow === true ? "w-[200px]" : "w-[50px]"
      } bg-slate-700 text-white p-4 flex flex-col gap-4`}
    >
      <div className="h-[30px] flex items-center gap-3">
        <DashboardOutlined />
        <div>{state.isCheckShow === true ? "Bảng điều khiển" : ""}</div>
      </div>
      <div className="h-[30px] flex items-center gap-3">
        <UserOutlined />
        <div>{state.isCheckShow === true ? "Tài khoản" : ""}</div>
      </div>
      <div className="h-[30px] flex items-center gap-3">
        <MoneyCollectOutlined />
        <div>{state.isCheckShow === true ? "Tài sản" : ""}</div>
      </div>
      <div className="h-[30px] flex items-center gap-3">
        <LineChartOutlined />
        <div>{state.isCheckShow === true ? "Thống kê" : ""}</div>
      </div>
      <div className="h-[30px] flex items-center gap-3">
        <FileOutlined />
        <div>{state.isCheckShow === true ? "Tài liệu" : ""}</div>
      </div>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => dispatch(isCheckShow())}
      >
        {state.isCheckShow === true ? (
          <div className="h-[30px] flex items-center gap-3">
            <LeftOutlined />
            <div>Thu gọn</div>
          </div>
        ) : (
          <div className="h-[30px]">
            <RightOutlined />
          </div>
        )}
      </div>
    </div>
  );
}
