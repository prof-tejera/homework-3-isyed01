import "./Button.css";

const Button = ({ active, text, ...btnProps }) => {
  return (
    <button
      className={active ? "active" : ""}
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default Button;
