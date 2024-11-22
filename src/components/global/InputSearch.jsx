import "./InputSearch.scss";

const InputSearch = ({ globalFilter, setGlobalFilter }) => {
  return (
    <label className="input-search-container">
      <img
        className="w-24 h-24"
        src="/src/assets/search.svg"
        alt="search icon"
      />
      <input
        value={globalFilter}
        type="text"
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="input-search"
        placeholder="search..."
      />
    </label>
  );
};

export default InputSearch;
