import styled from "styled-components";
import React from "react";

interface OverviewElementProps {
  title: string;
  subtitle: string;
  file: string;
  changeFile: (newFile: string) => void;
}

const Element = styled.button`
  border: ${(props) => props.theme.button.background} 2px solid;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 1em;
  padding: 0.5em;
  margin-bottom: 1em;

  &:focus,
  :hover {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.button.focusShadow};
    cursor: pointer;
  }
`;

const OverviewElement = ({
  title,
  subtitle,
  file,
  changeFile,
}: OverviewElementProps) => {
  return (
    <Element onClick={() => changeFile(file)}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </Element>
  );
};

export default OverviewElement;
