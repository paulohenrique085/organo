import "./textField.css";

const TextField = (props) => {
  const changeValue = (event) => {
    props.changedValue(event.target.value);
  };

  return (
    <div className="textField-container">
      <label className="textField-label" htmlFor="">
        {props.labelValue}
      </label>
      <input
        onChange={changeValue}
        value={props.value}
        //valida a obrigatoriedade do campo
        required={props.requiredField}
        className="textField-input"
        type="text"
        placeholder={props.placeholderValue}
      />
    </div>
  );
};

export default TextField;
