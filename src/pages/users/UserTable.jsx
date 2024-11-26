import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { data } from "./data";

// Create a column helper object
const columnHelper = createColumnHelper();

const UserTable = () => {
  // Columns defs
  const columns = [
    // Grioup Column
    columnHelper.group({
      header: "Full Name",
      footer: (props) => props.column.id,
      columns: [
        // Accessor column
        columnHelper.accessor("name", {
          header: "Name",
          cell: (info) => info.getValue(),
          footer: (props) => props.column.id,
        }),
        // Accessor column
        columnHelper.accessor((row) => row.lastName, {
          id: "lastName",
          cell: (info) => info.getValue(),
          header: () => <span>Last Name</span>,
          footer: (props) => props.column.id,
        }),
      ],
    }),
    columnHelper.accessor("email", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("rol", {
      cell: (info) => info.getValue(),
    }),
  ];

  // Cretae an instance of TST
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main>
      <table className="table">
        <thead className="table-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
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
    </main>
  );
};

export default UserTable;
