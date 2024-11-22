import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { data } from "./data";

import "./Table.scss";
import InputSearch from "../global/InputSearch";
import Button from "../global/Button";

const Table = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  });
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (props) => <p>{props.getValue()}</p>,
      sortingFn: "alphanumeric",
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

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
      pagination,
      sorting,
    },
    globalFilterFn: "includesString",
    onGlobalFilterChange: setGlobalFilter,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    // Sorting
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <section className="table-container">
      <InputSearch
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table className="table">
        <thead className="table-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="table-header">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="table-th">
                  <span className="table-header-cell">
                    {header.column.columnDef.header}
                    <div
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : ""
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <img src="/src/assets/sort-fill.svg" alt="sorting icon" />
                    </div>
                  </span>
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

      <div className="pagination-container">
        <span>Show 50</span>
        <div className="pagination-buttons-container">
          <Button
            onclick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            value="<< Prev"
          />
          <Button
            onclick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            value="Next >>"
          />

          <span className="pagination-pagecount">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Table;
