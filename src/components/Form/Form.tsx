import { useState } from "react";
import { FORM_FIELDS } from "../../data/data";
import "./Form.css";

export default function Form() {
  const [valoresForm, setValoresForm] = useState({});

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // Lógica para lidar com os dados do formulário
    // Enviá-los para um servidor
    console.log("Valores do formulário: ", valoresForm); // Teste valores
  };

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setValoresForm((valorAnterior) => ({
      ...valorAnterior,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="grid-form">
      {FORM_FIELDS.map((campo, index) => (
        <div
          className={`elemento-form ${
            index === 0
              ? "div-1"
              : index === 1
              ? "div-2"
              : index === 2
              ? "div-3"
              : index === 3
              ? "div-4"
              : index === 4
              ? "div-5"
              : index === 5
              ? "div-6"
              : index === 6
              ? "div-7"
              : ""
          }`}
          key={index}
        >
          <label htmlFor={campo.label}>
            {campo.label}
            {campo.required && <span>*</span>}
          </label>
          {campo.type === "select" ? (
            <select
              name={campo.name}
              id={campo.label}
              value={valoresForm[campo.name] || ""}
              onChange={handleInputChange}
              autoComplete="on"
              required={campo.required}
            >
              <option value="" disabled>
                {campo.placeholder}
              </option>
              {campo.choices.map((escolha, escolhaIndex) => (
                <option key={escolhaIndex} value={escolha.value}>
                  {escolha.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={campo.type}
              name={campo.name}
              id={campo.label}
              placeholder={campo.placeholder}
              value={valoresForm[campo.name] || ""}
              onChange={handleInputChange}
              autoComplete="on"
              required={campo.required}
            />
          )}
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
}
