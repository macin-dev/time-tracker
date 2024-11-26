import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { data } from "../../../data/data";
import { useState } from "react";
import Pagination from "../../components/pagination/Pagination";

import Table from "../../components/table/Table";
import TableContainer from "../TableContainer";
import PageContainer from "../PageContainer";
import InputSearch from "../../components/global/InputSearch";

// Create a column helper object
const columnHelper = createColumnHelper();

const UserTable = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  // Columns defs
  const columns = [
    columnHelper.accessor("iduser", {
      header: "User Folios",
      cell: (info) => info.getValue(),
    }),
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
    state: {
      sorting,
      pagination,
      globalFilter,
    },
    // sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // Pagination
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    // Global filter functionality
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <PageContainer>
      <TableContainer>
        <InputSearch
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Table table={table} />
        <Pagination table={table} onPagination={setPagination} />
      </TableContainer>
    </PageContainer>
  );
};

export default UserTable;
