import { Link } from "react-router-dom";
import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const SectionOne = styled.section<{ theme: CustomTheme }>`
  width: 100%;
  padding: 2.5rem 0 3.5rem 0;
  user-select: none;
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-black)"
      : "var(--primary-white)"};
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
`;

export const SectionOneTitle = styled.h2`
  text-align: center;
  font-size: 2.7rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const SectionCourses = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .course-examples {
    display: flex;
    align-items: normal;
    justify-content: center;
    flex-wrap: wrap;

    .img-examples {
      width: 16rem;
      height: auto;
      margin: 0.3rem;
    }

    figcaption {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export const ToCoursesDiv = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const LinkCatalog = styled(Link)<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "var(--dark-green)" : "var(--light-green)"};
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  font-size: 2rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--primary-white)"
        : "var(--primary-black)"};
    color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--dark-green)"
        : "var(--light-green)"};
    border: ${(props) =>
      props.theme.mode === "light"
        ? "1px solid var(--dark-green)"
        : "1px solid var(--light-green)"};
  }

  &:focus {
    border: ${(props) =>
      props.theme.mode === "light"
        ? "solid 1px var(--primary-white)"
        : "solid 1px var(--primary-black)"};
    outline: ${(props) =>
      props.theme.mode === "light"
        ? "2px solid var(--dark-green)"
        : "2px solid var(--light-green)"};
  }

  &::before {
    position: relative;
  }
`;
