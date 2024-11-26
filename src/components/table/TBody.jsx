import { flexRender } from "@tanstack/react-table";
import PropTypes from "prop-types";

const TBody = ({ table }) => {
  return (
    <tbody className="table-body">
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;

TBody.propTypes = {
  table: PropTypes.object,
};
