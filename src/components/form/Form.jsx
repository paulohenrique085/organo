import "./form.css";
import TextField from "../textField/TextField";
import OnClickButton from "../buttons/onClick/OnClickButton";

const Form = () => {
  return (
    <form className="form-container">
      <TextField placeholderValue={"Nome do colaborador"} labelValue={"Nome"} />
      <TextField placeholderValue={"Cargo colaborador"} labelValue={"Cargo"} />
      <TextField
        placeholderValue={"Insira o número de telefone"}
        labelValue={"Número de Telefone"}
      />
      <OnClickButton titleButton={"Cadastrar"} />
    </form>
  );
};

export default Form;
