import styled from "styled-components";
import { CustomTheme } from "../types/themeTypes";

export const DotsContainer = styled.div<{ theme: CustomTheme }>`
  position: absolute;
  bottom: 5%;
  left: 50%;
  right: 50%;
  z-index: 2;
`;

export const ListDots = styled.ul<{ theme: CustomTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style-type: none;
    transition: all 0.6s ease-in-out;
    margin: 0rem 0.5rem;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li button {
    font-size: 0 !important;
    margin: 0;
    padding: 0;
    border: ${(props) =>
      props.theme.mode === "light"
        ? "2px solid var(--primary-white)"
        : "2px solid var(--primary-black)"};
    cursor: pointer;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    transition: all 0.6s ease-in-out;
    background-color: var(--primary-white-transparent);
  }

  li button:focus {
    outline: ${(props) =>
      props.theme.mode === "light"
        ? "1px solid var(--primary-black)"
        : "1px solid var(--primary-white)"};
  }

  .slick-active button {
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--primary-white)"
        : "var(--primary-black)"};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.8);
  }
`;
