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
import Pagination from "../pagination/Pagination";
import ButtonFilter from "./ButtonFilter";

const Table = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      globalFilter,
      pagination,
      sorting,
    },
    // Pagination
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    // Global filtering
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    // Sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <section className="table-container">
      <div className="header-search">
        <InputSearch
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <ButtonFilter />
      </div>
      <table className="table">
        <thead className="table-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="table-header">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="table-th">
                  <div
                    className={
                      header.column.getCanSort() ? "header-sorting" : ""
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.column.columnDef.header}
                    <img src="/src/assets/sort-fill.svg" alt="sorting icon" />
                  </div>
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
      <Pagination table={table} onPagination={setPagination} />
    </section>
  );
};

export default Table;
