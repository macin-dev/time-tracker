import PropTypes from "prop-types";
import THeader from "./THeader";
import TBody from "./TBody";

import "./Table.scss";

const Table = ({ table }) => {
  return (
    <table>
      <THeader table={table} />
      <TBody table={table} />
    </table>
  );
};

export default Table;

Table.propTypes = {
  table: PropTypes.object,
};
