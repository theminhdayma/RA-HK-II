import { useEffect, useState } from "react";
import swal from "sweetalert";
import ModalAdd from "./Modal/ModalAdd";
import ModalUpdate from "./Modal/ModalUpdate";

export interface Book {
  id: number;
  nameBook: string;
  nameStudent: string;
  dateOfHire: string;
  payDay: string;
  status: boolean;
}

export default function Index() {
  const [isCheckModalAdd, setIsCheckModalAdd] = useState<boolean>(false);
  const [isCheckModalUpdate, setIsCheckModalUpdate] = useState<boolean>(false);
  const [listBook, setListBook] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); // Sách được chọn để chỉnh sửa
  const [filterStatus, setFilterStatus] = useState<string>("Tất cả"); // Trạng thái hiện tại của việc lọc

  useEffect(() => {
    const storedBooks = localStorage.getItem("ListBook");
    if (storedBooks) {
      setListBook(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ListBook", JSON.stringify(listBook));
  }, [listBook]);

  const handleAdd = () => {
    setIsCheckModalAdd(true);
  };

  const closeModalAdd = () => {
    setIsCheckModalAdd(false);
  };

  const handleUpdate = (book: Book) => {
    setSelectedBook(book); // Lưu thông tin sách được chọn vào state
    setIsCheckModalUpdate(true);
  };

  const closeModalUpdate = () => {
    setIsCheckModalUpdate(false);
    setSelectedBook(null); // Đặt lại state sách được chọn sau khi đóng modal
  };

  const addBook = (newBook: Book) => {
    const updatedList = [...listBook, newBook];
    setListBook(updatedList);
    localStorage.setItem("ListBook", JSON.stringify(updatedList));
    closeModalAdd(); // Đóng modal sau khi thêm sách thành công
  };

  const updateBook = (updatedBook: Book) => {
    const updatedList = listBook.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setListBook(updatedList);
    localStorage.setItem("ListBook", JSON.stringify(updatedList));
    closeModalUpdate(); // Đóng modal sau khi cập nhật thành công
  };

  const deleteBook = (id: number) => {
    swal({
      title: "Bạn có chắc chắn muốn xóa không ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete: boolean) => {
      if (willDelete) {
        const updatedList = listBook.filter((book) => book.id !== id);
        setListBook(updatedList);
        localStorage.setItem("ListBook", JSON.stringify(updatedList));
        swal("Xóa thành công", {
          icon: "success",
        });
      } else {
        swal("Hủy xóa thành công!");
      }
    });
  };

  const handleStatusChange = (id: number, newStatus: boolean) => {
    const updatedList = listBook.map((book) =>
      book.id === id ? { ...book, status: newStatus } : book
    );
    setListBook(updatedList);
    localStorage.setItem("ListBook", JSON.stringify(updatedList));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  // Danh sách sách đã lọc
  const filteredBooks = listBook.filter((book) => {
    if (filterStatus === "Tất cả") {
      return true; // Hiển thị tất cả sách nếu đang chọn "Tất cả"
    } else {
      const statusFilter = filterStatus === "Đã trả"; // true nếu đang lọc sách đã trả
      return book.status === statusFilter;
    }
  });

  return (
    <>
      <div className="w-full m-auto mt-4 h-screen">
        <main className="main">
          <header className="flex justify-between mb-3">
            <h1 className="text-2xl">Quản Lý Mượn Trả Sách</h1>
            <button onClick={handleAdd} className="btn btn-primary">
              Thêm thông tin
            </button>
          </header>
          <div className="flex items-center justify-end gap-2 mb-3">
            <select className="option" onChange={handleFilterChange}>
              <option value="Tất cả">Lọc theo trạng thái</option>
              <option value="Đã trả">Đã trả</option>
              <option value="Chưa trả">Chưa trả</option>
            </select>
            <input
              style={{ width: 350 }}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm theo tiêu đề"
            />
            <i className="fa-solid fa-arrows-rotate" title="Refresh" />
          </div>
          <div>
            <table className="table text-center table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Sách</th>
                  <th>Sinh Viên Mượn</th>
                  <th>Ngày Mượn</th>
                  <th>Ngày Trả</th>
                  <th>Trạng thái</th>
                  <th>Chức Năng</th>
                </tr>
              </thead>
              <tbody style={{ maxHeight: "300px", overflowY: "auto" }}>
                {filteredBooks.map((book: Book, index: number) => (
                  <tr key={book.id}>
                    <td>{index + 1}</td>
                    <td>{book.nameBook}</td>
                    <td>{book.nameStudent}</td>
                    <td>{book.dateOfHire}</td>
                    <td>{book.payDay}</td>
                    <td>
                      <select
                        className={book.status ? "published" : "unpublished"}
                        value={book.status ? "Đã trả" : "Chưa trả"}
                        onChange={(e) =>
                          handleStatusChange(
                            book.id,
                            e.target.value === "Đã trả" ? true : false
                          )
                        }
                      >
                        <option value="Chưa trả">Chưa trả</option>
                        <option value="Đã trả">Đã trả</option>
                      </select>
                    </td>
                    <td className="function">
                      <button
                        onClick={() => handleUpdate(book)}
                        className="btn btn-sm btn-info me-1"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => deleteBook(book.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      {isCheckModalAdd && (
        <ModalAdd closeModalAdd={closeModalAdd} addBook={addBook} />
      )}
      {isCheckModalUpdate && (
        <ModalUpdate
          closeModalUpdate={closeModalUpdate}
          bookToUpdate={selectedBook!}
          updateBook={updateBook}
        />
      )}
    </>
  );
}
