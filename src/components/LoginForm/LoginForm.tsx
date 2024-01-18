import { ChangeEvent, FormEvent, useState } from "react";

import { useTheme } from "../../hooks/useTheme";
import { FormValue } from "../../types/appTypes";
import { LOGIN_FORM } from "../../constants/loginConstants";
import {
  FormButtonLogin,
  FormContainerLogin,
  FormInputLogin,
} from "../../styles/loginForm";

export default function LoginForm() {
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
    <FormContainerLogin theme={theme} onSubmit={handleSubmit}>
      {LOGIN_FORM.map((field, index) => (
        <div
          className={`login-element ${
            index === 0 ? "div-1" : index === 1 ? "div-2" : ""
          }`}
          key={index}
        >
          <label htmlFor={field.label}>
            {field.label}
            {field.required && <span>*</span>}
          </label>
          <FormInputLogin
            type={field.type}
            name={field.name}
            id={field.label}
            placeholder={field.placeholder}
            value={formValues[field.name] || ""}
            onChange={handleInputChange}
            autoComplete="on"
            required={field.required}
          />
        </div>
      ))}
      <FormButtonLogin type="submit">Entrar</FormButtonLogin>
    </FormContainerLogin>
  );
}
