import styled from "styled-components";
import { CustomTheme } from "../types/themeTypes";

export const DotsContainer = styled.div<{ theme: CustomTheme }>`
  position: absolute;
  bottom: 5%;
  left: 50%;
  right: 50%;
  z-index: 2;
`;

export const ListDots = styled.ul`
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
    border: 2px solid #edebe7;
    cursor: pointer;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    transition: all 0.6s ease-in-out;
    background-color: #edebe700;
  }

  li button:focus {
    outline: 1px solid #edebe7;
  }

  .slick-active button {
    background-color: #edebe7;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.8);
  }
`;
