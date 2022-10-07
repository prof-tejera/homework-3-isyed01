import "./Input.css";


const Input = (props) => {
  return <p>
    { props.required ? <span className="input-required-symbol">*&nbsp;</span> : "" }
    <label htmlFor={props.id} className="input-label">{props.label}</label>
    <input name={props.id} {...props} />
  </p>;
};

export default Input;
