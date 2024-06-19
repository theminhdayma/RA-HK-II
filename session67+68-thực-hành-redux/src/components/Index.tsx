import { useEffect, useState } from "react";
import ModalAdd from "./Modal/ModalAdd";
import { useDispatch, useSelector } from "react-redux";
import ModalUpdate from "./Modal/ModalUpdate";

interface Book {
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
  const [listBook, setListBook] = useState<Book[]>([])
  const books = useSelector((state: any) => state.reducerBook);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedBooks = localStorage.getItem("ListBook");
    if (storedBooks) {
      setListBook(JSON.parse(storedBooks));
    }
  }, []);

  const handleAdd = () => {
    setIsCheckModalAdd(true);
  };
  const closeModalAdd = () => {
    setIsCheckModalAdd(false);
  };

  const handleUpdate = () => {
    setIsCheckModalUpdate(true);
  };
  const closeModalUpdate = () => {
    setIsCheckModalUpdate(false);
  };

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
                {listBook.map((book: Book, index: number) => (
                  <tr key={book.id}>
                    <td>{index + 1}</td>
                    <td>{book.nameBook}</td>
                    <td>{book.nameStudent}</td>
                    <td>{book.dateOfHire}</td>
                    <td>{book.payDay}</td>
                    <td>
                      <div
                        className={book.status ? "published" : "unpublished"}
                      >
                        {book.status ? "Đã Trả" : "Chưa Trả"}
                      </div>
                    </td>
                    <td className="function">
                      <button onClick={handleUpdate} className="btn btn-sm btn-info me-1">Sửa</button>
                      <button className="btn btn-sm btn-danger">Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      {isCheckModalAdd && <ModalAdd closeModalAdd={closeModalAdd} />}
      {isCheckModalUpdate && (
        <ModalUpdate closeModalUpdate={closeModalUpdate} />
      )}
    </>
  );
}
