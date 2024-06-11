import { useState } from "react";
import FormCreateStudents from "./Form/FormCreateStudents";

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
}

export default function Header({ loadData }: Props) {
  const [showFormCreateStudent, setShowFormCreateStudent] =
    useState<boolean>(false);

  const handleShowFormCreate = () => {
    setShowFormCreateStudent(true);
  };

  const closeFormCreate = () => {
    setShowFormCreateStudent(false);
  };

  return (
    <>
      <div>
        <header className="d-flex justify-content-between mb-3">
          <h3>Nhân viên</h3>
          <button onClick={handleShowFormCreate} className="btn btn-primary">
            Thêm mới nhân viên
          </button>
        </header>
        <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
          <input
            style={{ width: 350 }}
            type="text"
            className="form-control"
            placeholder="Tìm kiếm theo email"
          />
          <i className="fa-solid fa-arrows-rotate" title="Refresh" />
        </div>
      </div>
      {showFormCreateStudent && (
        <FormCreateStudents
          loadData={loadData}
          closeFormCreate={closeFormCreate}
        />
      )}
    </>
  );
}
