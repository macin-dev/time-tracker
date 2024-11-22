import "./Button.scss";

const Button = ({ value, onclick, disabled }) => {
  return (
    <button onClick={onclick} disabled={disabled} className="pagination-btn">
      {value}
    </button>
  );
};

export default Button;
