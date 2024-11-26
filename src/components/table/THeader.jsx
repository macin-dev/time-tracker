import PropTypes from "prop-types";
import THeadCell from "./THeadCell";

const THeader = ({ table }) => {
  return (
    <thead className="table-header">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} colSpan={header.colSpan}>
              <THeadCell header={header} />
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default THeader;

THeader.propTypes = {
  table: PropTypes.object,
};
