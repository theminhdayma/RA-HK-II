import axios from "axios";
import { useState } from "react";

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
  loadData: () => void;
  closeFormCreate: () => void;
}

export default function FormCreateStudents({
  loadData,
  closeFormCreate,
}: Props) {
  
  const [student, setStudent] = useState<Student>({
    id: `${Math.floor(Math.random() * 9999999999999)}`,
    student_name: "",
    email: "",
    address: "",
    phone: "",
    status: true,
    created_at: "",
  });

  const [errors, setErrors] = useState({
    student_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
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

    if (!student.student_name) {
      errors.student_name = "Họ và tên không được để trống.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!student.email) {
      errors.email = "Email không được để trống.";
      valid = false;
    } else if (!emailRegex.test(student.email)) {
      errors.email = "Email không đúng định dạng.";
      valid = false;
    }

    const phoneRegex = /^[0-9]*$/;
    if (!student.phone) {
      errors.phone = "Số điện thoại không được để trống.";
      valid = false;
    } else if (!phoneRegex.test(student.phone)) {
      errors.phone = "Số điện thoại chỉ được phép nhập số.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault()

    if (validate()) {
      axios
        .post("http://localhost:8080/students", student)
        .then(() => {
          loadData();
          closeFormCreate();
        })
        .catch((err) => {
          console.error("Error creating student:", err);
        });
    }
  };

  return (
    <div className="overlay">
      <form className="form" onSubmit={handleCreateStudent}>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Thêm mới sinh viên</h4>
          <i onClick={closeFormCreate} className="fa-solid fa-xmark" />
        </div>
        <div>
          <label className="form-label" htmlFor="student_name">
            Họ và tên
          </label>
          <input
            onChange={handleChange}
            name="student_name"
            value={student.student_name}
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
            value={student.email}
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
            value={student.address}
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
            value={student.phone}
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
            Thêm mới
          </button>
        </div>
      </form>
    </div>
  );
}
