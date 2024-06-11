import Header from "./Header";
import StudentList from "./StudentList";
import Footer from "./Footer";
import { useState } from "react";
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

export default function Index() {
  const [student, setStudent] = useState<Student[]>([]);
  const loadData = () => {
    axios
      .get("http://localhost:8080/students")
      .then((data) => setStudent(data.data))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="w-[80%] m-auto mt-4 h-[100vh]">
        <main className="main">
          <Header loadData={loadData}/>
          {/* Danh sách nhân viên */}
          <StudentList />
        </main>
      </div>
    </>
  );
}
