interface FooterProps {
  currentPage: number;
  totalPages: number;
  recordsPerPage: number;
  totalRecords: number;
  onPageChange: (page: number) => void;
  onRecordsPerPageChange: (perPage: number) => void;
}

export default function Footer({
  currentPage,
  totalPages,
  recordsPerPage,
  totalRecords,
  onPageChange,
  onRecordsPerPageChange,
}: FooterProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const handleRecordsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const perPage = parseInt(e.target.value, 10);
    onRecordsPerPageChange(perPage);
  };

  return (
    <footer className="d-flex justify-content-end align-items-center gap-3">
      <span>
        Hiển thị{" "}
        {Math.min(recordsPerPage * (currentPage - 1) + 1, totalRecords)} -{" "}
        {Math.min(recordsPerPage * currentPage, totalRecords)} trên tổng số{" "}
        {totalRecords} bản ghi
      </span>
      <select
        className="form-select"
        value={recordsPerPage}
        onChange={handleRecordsPerPageChange}
      >
        <option value={10}>Hiển thị 10 bản ghi trên trang</option>
        <option value={20}>Hiển thị 20 bản ghi trên trang</option>
        <option value={50}>Hiển thị 50 bản ghi trên trang</option>
        <option value={100}>Hiển thị 100 bản ghi trên trang</option>
      </select>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePrevious();
            }}
          >
            Previous
          </a>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(index + 1);
              }}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </footer>
  );
}
