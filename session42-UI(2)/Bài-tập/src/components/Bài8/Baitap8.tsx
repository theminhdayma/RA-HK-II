import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function Baitap8() {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Trang chủ" title="Trang chủ">
          Đây là trang chủ
        </Tab>
        <Tab eventKey="giới thiệu" title="giới thiệu">
          Đây là trang giới thiệu
        </Tab>
        <Tab eventKey="Liên hệ" title="Liên hệ">
          Đây là trang liên hệ
        </Tab>
      </Tabs>
    </div>
  );
}
