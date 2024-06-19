interface Props {
  closeModalUpdate: () => void;
}

export default function ModalUpdate({ closeModalUpdate }: Props) {
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
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label">Tên sách</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Tên người mượn</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày mượn</label>
              <input type="date" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày trả</label>
              <input type="date" className="form-control" />
            </div>
            {/* <div className="alert alert-danger" style={{ display: "none" }}>
                Validation Error
              </div> */}
            <div className="modal-footer-custom">
              <button
                onClick={closeModalUpdate}
                className="btn btn-sm btn-secondary"
              >
                Hủy
              </button>
              <button className="btn btn-sm btn-primary">Thêm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
