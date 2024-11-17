import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { data } from "./data";

import "./Table.scss";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "schoolLevel",
    header: "Nivel Academico",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "grade",
    header: "Grade",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  ,
  {
    accessorKey: "topic",
    header: "Topic",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "startClass",
    header: "Start Class",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "endClass",
    header: "End Class",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const Table = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="table">
      <thead className="table-header">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="table-header">
            {headerGroup.headers.map((header) => (
              <th key={header.id}>{header.column.columnDef.header}</th>
            ))}
          </tr>
        ))}
      </thead>
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
    </table>
  );
};

export default Table;
