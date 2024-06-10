import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  dateOfBirth: string;
  email: string;
}

export default function GrtMethod() {
  const [students, setStudents] = useState<Student[]>([]);
  const [typeSubmit, setTypeSubmit] = useState<string>("add");
  const [inputValue, setInputValue] = useState<string>("");
  const [student, setStudent] = useState<Student>({
    id: Math.floor(Math.random() * 9999999999999),
    name: "",
    dateOfBirth: "",
    email: "",
  });
  // Khi sử dụng fetch mà kh định nghĩa HTTP request thì mặc định
  // nó sẽ là GET
  const loadData = () => {
    fetch(`http://localhost:3000/students?name_like=${inputValue}`)
      .then((response: Response) => response.json())
      .then((data: Student[]) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  /**
     Hàm xóa thông tin một sinh viên theo id
     @param id Id của sinh viên cần xóa
   */
  const handleClick = (id: number) => {
    // Gọi API xóa
    fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    })
      .then((response: Response) => {
        //Kiểm tra response trả về và load lại trang
        if (response.ok) {
          // Load lại trang
          loadData();
          // Đóng modal xác nhận xóa
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Ngăn chặn hành vi load lại trang
    e.preventDefault();

    // 1. Validate dữ liệu

    // 2. Nếu validate ok thì gửi dữ liệu lên server
    // Nếu typeSubmit sẽ thêm mới dữ liệu
    if (typeSubmit === "add") {
      fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(student),
      })
        .then((response: Response) => {
          if (response.ok) {
            // Đóng form

            // Load lại dữ liệu
            loadData();

            //Reset lại form
            resset();
          }
        })
        .catch((err) => console.log(err));
    } else if (typeSubmit === "update") {
      // Nếu typeSubmit là update sẽ tiến hành cập nhật dữ liệu
      fetch(`http://localhost:3000/students/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(student),
      }).then((response: Response) => {
        if (response.ok) {
          // Đóng form

          // Reset form
          resset();
          // Load lại dữ liệu
          loadData();
          // Reset TypeSubmit
          setTypeSubmit("add");
        }
      });
    }

    // 2.1 Nếu gửi thành công thì đóng form, reset giá trị, logic tiếp theo

    // 2.2
  };

  // Hàm lấy giá trị form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lấy ra name và value trong ô input
    const { name, value } = e.target;

    // Cập nhật lại state cho student
    setStudent({
      ...student,
      [name]: value,
    });
  };

  // Reset lại giá trị trong form
  const resset = () => {
    setStudent({
      id: Math.floor(Math.random() * 9999999999999),
      name: "",
      dateOfBirth: "",
      email: "",
    });
  };

  // Hàm lấy thông tin chi tiết một bản ghi theo id
  const handleGetInfo = (id: number) => {
    // Cập nhật lại typeSubmit
    setTypeSubmit("update");
    // Gọi API lấy thông tin chi tiêt sinh viên
    fetch(`http://localhost:3000/students/${id}`)
      .then((response: Response) => response.json())
      .then((data: Student) => {
        console.log(data);

        setStudent(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <input onChange={(e) => setInputValue(e.target.value)} type="text" />
      <div style={{ display: "flex", gap: "50px" }}>
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>DateofBrith</th>
              <th>Email</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: Student, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={() => handleGetInfo(student.id)}>Sửa</button>
                  <button onClick={() => handleClick(student.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          action=""
        >
          <h3>Form thêm mới</h3>
          <div>
            <label htmlFor="">Name</label>
            <input
              onChange={handleChange}
              name="name"
              value={student.name}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">DateOfBirth</label>
            <input
              onChange={handleChange}
              name="dateOfBirth"
              value={student.dateOfBirth}
              type="date"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              onChange={handleChange}
              name="email"
              value={student.email}
              type="text"
            />
          </div>
          <div>
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
