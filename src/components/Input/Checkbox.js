import "./Input.css";


const Checkbox = (props) => {
  return <p>
    <input type="checkbox" name={props.id} {...props} />
    <label htmlFor={props.id} className="input-label-checkbox">{props.label}</label>
    { props.required ? <span className="input-required-symbol">&nbsp;*</span> : "" }
  </p>;
};

export default Checkbox;
