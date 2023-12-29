import "./textField.css";

const TextField = ({ placeholderValue, labelValue }) => {
  return (
    <div className="textField-container">
      <label className="textField-label" htmlFor="">
        {labelValue}
      </label>
      <input
        className="textField-input"
        type="text"
        placeholder={placeholderValue}
      />
    </div>
  );
};

export default TextField;
