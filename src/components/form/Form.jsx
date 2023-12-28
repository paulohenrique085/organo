import "./form.css";
import TextField from "../textField/TextField";

const Form = () => {
  return (
    <form className="form-container">
      <TextField placeholderValue={"Nome do colaborador"} labelValue={"Nome"} />
      <TextField placeholderValue={"Cargo colaborador"} labelValue={"Cargo"} />
    </form>
  );
};

export default Form;
