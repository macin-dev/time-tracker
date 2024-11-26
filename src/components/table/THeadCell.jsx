import { flexRender } from "@tanstack/react-table";
import PropTypes from "prop-types";

const THeadCell = ({ header }) => {
  return (
    <div
      className={header.column.getCanSort() ? "header-sorting" : ""}
      onClick={header.column.getToggleSortingHandler()}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
      <img src="/src/assets/sort-fill.svg" alt="sorting icon" />
    </div>
  );
};

export default THeadCell;

THeadCell.propTypes = {
  header: PropTypes.object,
};
