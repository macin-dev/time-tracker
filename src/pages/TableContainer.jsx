import "./TableContainer.scss";

const TableContainer = ({ children }) => {
  return (
    <main className="table-container">
      <div className="table-overflow">{children}</div>
    </main>
  );
};

export default TableContainer;
