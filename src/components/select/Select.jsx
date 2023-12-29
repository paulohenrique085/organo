import "./select.css";

const Select = (props) => {
  return (
    <div className="select-container">
      <label className="select-label" htmlFor="">
        {props.labelValue}
      </label>
      <select id="cargos" name="Cargo">
        {props.options.map((option) => (
          <option> {option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
