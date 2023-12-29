import "./form.css";
import TextField from "../textField/TextField";
import OnClickButton from "../buttons/onClick/OnClickButton";
import Select from "../select/Select";

const Form = () => {
  const teams = ["BackEnd", "Produto", "FrontEnd"];
  return (
    <form className="form-container">
      <TextField placeholderValue={"Digite seu nome"} labelValue={"Nome"} />
      <TextField placeholderValue={"Digite seu cargo"} labelValue={"Cargo"} />
      <TextField
        placeholderValue={"Insira o endereço da imagem"}
        labelValue={"Imagem"}
      />
      <Select options={teams} labelValue={"Time"} />

      <OnClickButton titleButton={"Cadastrar Colaborador"} />
    </form>
  );
};

export default Form;
