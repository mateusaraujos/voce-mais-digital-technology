import { useState, ChangeEvent, FormEvent } from "react";
import { useTheme } from "styled-components";

import { FormValue } from "../../types/appTypes";
import { FORM_FIELDS } from "../../constants/appConstants";
import {
  FormButton,
  FormContainer,
  FormInput,
  FormSelect,
} from "../../styles/form";

export default function Form() {
  const { theme } = useTheme();
  const [formValues, setFormValues] = useState<FormValue>({});

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
    <FormContainer theme={theme} onSubmit={handleSubmit} className="form-grid">
      {FORM_FIELDS.map((field, index) => (
        <div
          className={`form-element ${
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
            <FormSelect
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
            </FormSelect>
          ) : (
            <FormInput
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
      <FormButton type="submit">Enviar</FormButton>
    </FormContainer>
  );
}
