import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import FormUpdateStudent from "./Form/FormUpdateStudent";

interface Student {
  id: string;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function Student() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showFormUpdateStudent, setShowFormUpdateStudent] =
    useState<boolean>(false);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);

  const getData = () => {
    axios
      .get(
        `http://localhost:8080/students`
      )
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id: string, name: string) => {
    swal({
      title: `Bạn có chắc chắn muốn xóa sinh viên ${name} không?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8080/students/${id}`)
          .then(() => {
            getData();
            swal(`Đã xóa sinh viên ${name}`, { icon: "success" });
          })
          .catch((err) => console.error(err));
      }
    });
  };

  const handleUpdate = (student: Student) => {
    setCurrentStudent(student);
    setShowFormUpdateStudent(true);
  };

  const closeFormCreate = () => {
    setShowFormUpdateStudent(false);
    setCurrentStudent(null);
  };

  return (
    <>
      <tbody>
        {students.map((item) => (
          <tr key={item.id}>
            <td>
              <input
                value={item.student_name}
                name="student_name"
                type="checkbox"
              />
            </td>
            <td>{item.student_name}</td>
            <td>{item.created_at}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>
              <span
                onClick={() => handleUpdate(item)}
                className="button button-edit"
              >
                Sửa
              </span>
            </td>
            <td>
              <span
                onClick={() => handleDelete(item.id, item.student_name)}
                className="button button-delete"
              >
                Xóa
              </span>
            </td>
          </tr>
        ))}
      </tbody>
      {showFormUpdateStudent && currentStudent && (
        <FormUpdateStudent
          student={currentStudent}
          closeFormCreate={closeFormCreate}
        />
      )}
    </>
  );
}
