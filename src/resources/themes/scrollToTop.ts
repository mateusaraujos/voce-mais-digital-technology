import styled from "styled-components";

export const ScrollUpButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  width: 3rem;
  height: 3rem;
  background-color: rgba(13, 13, 13, 0);
  border: none;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 3;
  outline: none;
  background-color: var(--primary-white);

  &:hover {
    background-color: lightgray;
  }

  /* Celular */
  @media (max-width: 414px), (max-width: 896px) {
    right: 2rem;
  }
`;
