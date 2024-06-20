import { useState } from "react";

interface Props {
  closeModalAdd: () => void;
  addBook: (newBook: Book) => void;
}

interface Book {
  id: number;
  nameBook: string;
  nameStudent: string;
  dateOfHire: string;
  payDay: string;
  status: boolean;
}

const ModalAdd = ({ closeModalAdd, addBook }: Props) => {
  const [minDate, setDate] = useState<string>("")
  const [formData, setFormData] = useState({
    nameBook: "",
    nameStudent: "",
    dateOfHire: "",
    payDay: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kiểm tra các trường không được để trống
    if (
      !formData.nameBook ||
      !formData.nameStudent ||
      !formData.dateOfHire ||
      !formData.payDay
    ) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Kiểm tra ngày mượn và ngày trả không được bé hơn ngày hiện tại
    const currentDate = new Date().toISOString().slice(0, 10);
    if (formData.dateOfHire < currentDate || formData.payDay < currentDate) {
      setError("Ngày mượn và ngày trả không được nhỏ hơn ngày hiện tại.");
      return;
    }

    const newBook: Book = {
      id: Date.now(),
      nameBook: formData.nameBook,
      nameStudent: formData.nameStudent,
      dateOfHire: formData.dateOfHire,
      payDay: formData.payDay,
      status: false, // Chưa trả khi mới thêm vào
    };
    addBook(newBook);
    // Sau khi thêm sách, reset form và xóa thông báo lỗi
    setFormData({
      nameBook: "",
      nameStudent: "",
      dateOfHire: "",
      payDay: "",
    });
    setError("");
  };

  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-title">
          <h1 className="text-2xl">Thêm thông tin</h1>
          <button onClick={closeModalAdd} className="btn btn-sm btn-danger">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="modal-body-custom">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tên sách</label>
              <input
                type="text"
                className="form-control"
                name="nameBook"
                value={formData.nameBook}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tên người mượn</label>
              <input
                type="text"
                className="form-control"
                name="nameStudent"
                value={formData.nameStudent}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày mượn</label>
              <input
                type="date"
                className="form-control"
                name="dateOfHire"
                value={formData.dateOfHire}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày trả</label>
              <input
                type="date"
                className="form-control"
                name="payDay"
                value={formData.payDay}
                onChange={handleChange}
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="modal-footer-custom">
              <button
                onClick={closeModalAdd}
                className="btn btn-sm btn-secondary"
              >
                Hủy
              </button>
              <button type="submit" className="btn btn-sm btn-primary">
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;