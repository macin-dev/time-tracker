const ItemsPerPage = ({ onPagination }) => {
  return (
    <div className="pagination-countpage">
      <span>Items per page</span>
      <select
        className="pagination-countpage__select"
        name="countPage"
        id="countPage"
        onChange={(e) =>
          onPagination((prev) => ({
            ...prev,
            pageSize: Number(e.target.value),
          }))
        }
      >
        {[3, 20, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemsPerPage;
