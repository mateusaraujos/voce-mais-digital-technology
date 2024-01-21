import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";
import { FormValue } from "../../types/appTypes";
import { LOGIN_FORM } from "../../constants/loginConstants";
import {
  FormButtonLogin,
  FormContainerLogin,
  FormInputLogin,
} from "../../styles/loginForm";
import { useAuth } from "../../hooks/useAuth";

export default function LoginForm() {
  const { login, logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValue>({});

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    console.log("Valores do formulário: ", formValues);

    // Teste de login e logout.
    if (formValues.email === "dev@gmail.com") {
      login();
      navigate("/dev");

      setTimeout(() => {
        logout();
      }, 5000);
    } else if (formValues.email === "adm@gmail.com") {
      login();
      navigate("/admin");

      setTimeout(() => {
        logout();
      }, 5000);
    } else if (formValues.email === "professor@gmail.com") {
      login();
      navigate("/teacher");

      setTimeout(() => {
        logout();
      }, 5000);
    } else if (formValues.email === "aluno@gmail.com") {
      login();
      navigate("/student");

      setTimeout(() => {
        logout();
      }, 5000);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <FormContainerLogin theme={theme} onSubmit={handleLogin}>
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
            autoFocus={field.type === "email"}
            tabIndex={
              field.type === "email"
                ? 2
                : field.type === "password"
                ? 3
                : undefined
            }
          />
        </div>
      ))}
      <FormButtonLogin type="submit" tabIndex={4}>
        Entrar
      </FormButtonLogin>
    </FormContainerLogin>
  );
}
