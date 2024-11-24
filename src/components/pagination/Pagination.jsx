import Buttons from "./Buttons";
import ItemsPerPage from "./ItemsPerPage";
import "./Pagination.scss";

const Pagination = ({ table, onPagination }) => {
  return (
    <div className="pagination-container">
      <ItemsPerPage onPagination={onPagination} />
      <div className="pagination-buttons-container">
        <Buttons table={table} />
        <div>
          <input
            className="pagination-countpage__select"
            min="0"
            max={table.getPageCount()}
            type="number"
            value={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </div>

        <span className="pagination-pagecount">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
