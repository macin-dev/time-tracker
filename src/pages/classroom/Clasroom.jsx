import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "../../components/pagination/Pagination";
import Table from "../../components/table/Table";
import PageContainer from "../PageContainer";
import TableContainer from "../TableContainer";
import { data } from "../../components/table/data";
import { useState } from "react";

const Clasroom = () => {
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  });

  // Create a column helper object
  const columnHelper = createColumnHelper();

  // Columns definition
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("schoolLevel", {
      header: "School Level",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("subject", {
      header: "Subject",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("grade", {
      header: "Grade",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("topic", {
      header: "Topic",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("startClass", {
      header: "Start Class",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("endClass", {
      header: "End Class",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      pagination,
    },
    // pagination functionality
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),

    // sorting functionality
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <PageContainer>
      <TableContainer>
        <Table table={table} />
        <Pagination table={table} onPagination={setPagination} />
      </TableContainer>
    </PageContainer>
  );
};

export default Clasroom;
