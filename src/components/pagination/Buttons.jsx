import Button from "../global/Button";

const Buttons = ({ table }) => {
  return (
    <>
      <Button
        onclick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
        value="<<"
      />

      <Button
        onclick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        value="< Prev"
      />
      <Button
        onclick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        value="Next >"
      />

      <Button
        onclick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
        value=">>"
      />
    </>
  );
};

export default Buttons;
