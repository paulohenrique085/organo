import "./form.css";
import TextField from "../textField/TextField";
import OnClickButton from "../buttons/onClick/OnClickButton";
import Select from "../select/Select";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const teams = ["BackEnd", "Produto", "FrontEnd"];

  const handleSubmit = (event) => {
    //faz com que o react não siga o comportamento padrão
    event.preventDefault();
    //aqui eu poderia mandar uma requisição para o banco de dados
    console.log(`Nome: ${name}\nOffice: ${office}\nImage:${image}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Cadastro de colaboradores</h2>
      <TextField
        value={name}
        changedValue={(value) => setName(value)}
        requiredField={true}
        placeholderValue={"Digite seu nome"}
        labelValue={"Nome"}
      />
      <TextField
        value={office}
        changedValue={(value) => setOffice(value)}
        //define se é um campo obrigatório direto no html
        requiredField={true}
        placeholderValue={"Digite seu cargo"}
        labelValue={"Cargo"}
      />
      <TextField
        value={image}
        changedValue={(value) => setImage(value)}
        requiredField={true}
        placeholderValue={"Insira o endereço da imagem"}
        labelValue={"Imagem"}
      />
      <Select requiredField={true} options={teams} labelValue={"Time"} />

      <OnClickButton titleButton={"Cadastrar Colaborador"} />
    </form>
  );
};

export default Form;
