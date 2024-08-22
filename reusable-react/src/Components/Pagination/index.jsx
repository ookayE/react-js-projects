function Pagination({ currentPage, totalPages = 10, onPageChange }) {
  function generateTotalPages() {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div className="pagination">
      <button className="pagination-button">Previous</button>
      {generateTotalPages().map((pageNumber) => (
        <button
          className="pagination-button"
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button className="pagination-button">Next</button>
    </div>
  );
}

export default Pagination;
