
export default function ModalRefresh() {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-title">
          <h2>Làm mới inputs</h2>
          <button className="btn btn-sm btn-danger">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="modal-body-custom">
          <p>Bạn có chắc muốn làm mới các input đã điền?</p>
        </div>
        <div className="modal-footer-custom">
          <button className="btn btn-sm btn-secondary">Hủy</button>
          <button className="btn btn-sm btn-danger">Xác nhận</button>
        </div>
      </div>
    </div>
  );
}
