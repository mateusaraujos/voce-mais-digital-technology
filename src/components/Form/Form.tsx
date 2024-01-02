import { useState, ChangeEvent, FormEvent } from "react";

import { FormValues } from "../../types/types";
import { FORM_FIELDS } from "../../constants/constants";

import "./Form.css";

export default function Form() {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Lógica para lidar com os dados do formulário
    // Enviá-los para um servidor
    console.log("Valores do formulário: ", formValues); // Teste valores
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="grid-form">
      {FORM_FIELDS.map((field, index) => (
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
          <label htmlFor={field.label}>
            {field.label}
            {field.required && <span>*</span>}
          </label>
          {field.type === "select" ? (
            <select
              name={field.name}
              id={field.label}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
              autoComplete="on"
              required={field.required}
            >
              <option value="" disabled>
                {field.placeholder}
              </option>
              {field.choices &&
                field.choices.map((escolha, escolhaIndex) => (
                  <option key={escolhaIndex} value={escolha.value}>
                    {escolha.label}
                  </option>
                ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.label}
              placeholder={field.placeholder}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
              autoComplete="on"
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
}
