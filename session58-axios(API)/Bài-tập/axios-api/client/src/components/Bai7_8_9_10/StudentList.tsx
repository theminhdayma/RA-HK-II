import Student from "./Student";
import Footer from "./Footer";
import { useEffect, useState } from "react";
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

export default function StudentList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    loadData();
  }, [currentPage, recordsPerPage]);

  const loadData = () => {
    axios
      .get(`http://localhost:8080/students?_page=${currentPage}&_limit=${recordsPerPage}`)
      .then((response) => {
        setStudents(response.data);
        setTotalRecords(parseInt(response.headers["x-total-count"], 10));
      })
      .catch((err) => console.error(err));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRecordsPerPageChange = (perPage: number) => {
    setRecordsPerPage(perPage);
    setCurrentPage(1); // Reset to first page when changing records per page
  };

  return (
    <div>
      <table className="table text-center table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th colSpan={2}>Chức năng</th>
          </tr>
        </thead>
        <Student />
      </table>
      <Footer
        currentPage={currentPage}
        totalPages={Math.ceil(totalRecords / recordsPerPage)}
        recordsPerPage={recordsPerPage}
        totalRecords={totalRecords}
        onPageChange={handlePageChange}
        onRecordsPerPageChange={handleRecordsPerPageChange}
      />
    </div>
  );
}
