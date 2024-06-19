import { useState } from "react";
import { Book } from "../Index"; // Import interface Book

interface Props {
  closeModalUpdate: () => void;
  bookToUpdate: Book; // Dữ liệu sách cần chỉnh sửa
  updateBook: (updatedBook: Book) => void; // Callback để cập nhật thông tin sách
}

const ModalUpdate = ({ closeModalUpdate, bookToUpdate, updateBook }: Props) => {
  const [formData, setFormData] = useState<Book>({
    ...bookToUpdate, // Khởi tạo form với dữ liệu sách hiện tại
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateBook(formData); // Gọi hàm updateBook từ props để cập nhật thông tin sách
    closeModalUpdate(); // Đóng modal sau khi cập nhật thành công
  };

  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-title">
          <h1 className="text-2xl">Cập nhật thông tin sách</h1>
          <button onClick={closeModalUpdate} className="btn btn-sm btn-danger">
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
            <div className="modal-footer-custom">
              <button
                onClick={closeModalUpdate}
                className="btn btn-sm btn-secondary"
              >
                Hủy
              </button>
              <button type="submit" className="btn btn-sm btn-primary">
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
