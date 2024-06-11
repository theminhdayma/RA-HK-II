import React, { useEffect } from "react";
import axios from "axios";

export default function App() {
  // useEffect(() => {
  //   // Lấy tất cả bản ghi trong bảng users
  //   axios
  //     .get("http://localhost:8080/users")
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   // Lấy 1 bản ghi trong bảng users
  //   axios
  //     .get("http://localhost:8080/users/2")
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   let newUser = {
  //     name: "Vải Thiều",
  //     age: 19,
  //   };
  //   // Thêm bản ghi trong bảng users
  //   axios
  //     .post("http://localhost:8080/users", newUser)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   // Xóa bản ghi trong bảng users
  //   axios
  //     .delete("http://localhost:8080/users/4")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   // Cập nhật một bản ghi trong users
  //   //PUT, PATCH
  //   // Cần biết id của bản ghi càn cập nhật

  //   let updateUser = {
  //     name: "Hồ Quang Hiếu",
  //   };
  //   axios
  //     .patch("http://localhost:8080/users/1", updateUser)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   // Tìm kiếm theo tên có h trong thuộc tính name
  //   axios
  //     .get("http://localhost:8080/users?name_like=i")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   // Tìm kiếm theo tên có m ở đầu
  //   axios
  //     .get("http://localhost:8080/users?name_like=^m")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   // Sắp xếp các đối tượng có thuộc tính name theo bảng chữ cái
  //   // ==> Tăng dần: asc (ascending)
  //   // ==> giảm dẩn : desc (deascendeing)
  //   axios
  //     .get("http://localhost:8080/users?_sort=name&order=desc")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    // Phân trang
    // Chia 1 trang có bao nhiêu bản ghi
    axios
      .get("http://localhost:8080/users?_page=1&_limit=3")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);
  return <div>App</div>;
}
