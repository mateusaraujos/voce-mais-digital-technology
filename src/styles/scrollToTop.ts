import styled from "styled-components";

export const ScrollUpButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  width: 3rem;
  height: 3rem;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  border: none;
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 1px 2px 0 rgba(161, 161, 161, 0.5), 0 2px 6px 2px rgba(185, 185, 185, 0.2)"
      : "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)"};
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 3;
  outline: none;

  &:hover {
    background-color: ${(props) =>
      props.theme.mode === "light" ? "lightgrey" : "var(--secondary-black)"};
  }

  /* Celular */
  @media (max-width: 414px), (max-width: 896px) {
    right: 2rem;
  }
`;
