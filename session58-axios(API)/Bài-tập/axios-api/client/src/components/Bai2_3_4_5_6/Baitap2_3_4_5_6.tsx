import axios from "axios";

interface Student {
  id: string;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function Baitap2_3_4_5_6() {
  // Bài 2
  const getAllStudent = () => {
    axios
      .get("http://localhost:8080/students")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
  getAllStudent();

  // Bài 3
  const getStudentById = (id: string) => {
    axios
      .get(`http://localhost:8080/students/4${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
  getStudentById("2");
  getStudentById("9");

  //Bài 4
  const removeById = (id: string) => {
    axios
      .delete(`http://localhost:8080/students/4${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
  removeById("1");
  removeById("10");

  // Bài 5
  let student: Student = {
    id: "11",
    student_name: "Minh Sâm",
    email: "minhsam2006@gmail.com",
    address: "Hà Nội",
    phone: "0987654321",
    status: true,
    created_at: "2024/02/28",
  };
  const createStudent = (student: Student) => {
    axios
      .post(`http://localhost:8080/students`, student)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  createStudent(student);

  // Bài 6
  let student6 = {
    student_name: "Minh Sâm",
    email: "minhsam2006@gmail.com",
    created_at: "2024/02/28",
  };
  const updateStudentById = (id: string) => {
    axios
      .patch(`http://localhost:8080/students/${id}`, student6)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
  updateStudentById("2");

  return <div></div>;
}
