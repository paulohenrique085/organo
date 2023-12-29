import "./textField.css";

const TextField = (props) => {
  return (
    <div className="textField-container">
      <label className="textField-label" htmlFor="">
        {props.labelValue}
      </label>
      <input
        className="textField-input"
        type="text"
        placeholder={props.placeholderValue}
      />
    </div>
  );
};

export default TextField;
