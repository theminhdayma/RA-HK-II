import axios from "axios";
import { useState, useEffect } from "react";

interface Student {
  id: string;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

interface Props {
  student: Student;
  closeFormCreate: () => void;
}

export default function FormUpdateStudent({ student, closeFormCreate }: Props) {
  const [updatedStudent, setUpdatedStudent] = useState<Student>(student);

  const [errors, setErrors] = useState({
    student_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setUpdatedStudent(student);
  }, [student]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let valid = true;
    let errors = {
      student_name: "",
      email: "",
      phone: "",
    };

    if (!updatedStudent.student_name) {
      errors.student_name = "Họ và tên không được để trống.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!updatedStudent.email) {
      errors.email = "Email không được để trống.";
      valid = false;
    } else if (!emailRegex.test(updatedStudent.email)) {
      errors.email = "Email không đúng định dạng.";
      valid = false;
    }

    const phoneRegex = /^[0-9]*$/;
    if (!updatedStudent.phone) {
      errors.phone = "Số điện thoại không được để trống.";
      valid = false;
    } else if (!phoneRegex.test(updatedStudent.phone)) {
      errors.phone = "Số điện thoại chỉ được phép nhập số.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleUpdateStudent = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      axios
        .patch(`http://localhost:8080/students/${updatedStudent.id}`, updatedStudent)
        .then(() => {
          closeFormCreate();
        })
        .catch((err) => {
          console.error("Error updating student:", err);
        });
    }
  };

  return (
    <div className="overlay">
      <form className="form" onSubmit={handleUpdateStudent}>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Cập nhật sinh viên</h4>
          <i onClick={closeFormCreate} className="fa-solid fa-xmark" />
        </div>
        <div>
          <label className="form-label" htmlFor="student_name">
            Họ và tên
          </label>
          <input
            onChange={handleChange}
            name="student_name"
            value={updatedStudent.student_name}
            id="student_name"
            type="text"
            className="form-control"
          />
          {errors.student_name && (
            <div className="form-text error">{errors.student_name}</div>
          )}
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            value={updatedStudent.email}
            id="email"
            type="email"
            className="form-control"
          />
          {errors.email && (
            <div className="form-text error">{errors.email}</div>
          )}
        </div>
        <div>
          <label className="form-label" htmlFor="address">
            Địa chỉ
          </label>
          <textarea
            onChange={handleChange}
            name="address"
            value={updatedStudent.address}
            className="form-control"
            id="address"
            rows={3}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="phone">
            Số điện thoại
          </label>
          <input
            onChange={handleChange}
            name="phone"
            value={updatedStudent.phone}
            id="phone"
            type="text"
            className="form-control"
          />
          {errors.phone && (
            <div className="form-text error">{errors.phone}</div>
          )}
        </div>
        <div>
          <button type="submit" className="w-100 btn btn-primary">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
}
