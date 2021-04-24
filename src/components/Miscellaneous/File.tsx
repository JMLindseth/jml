import React, { useState } from "react";
import marked from "marked";
import styled from "styled-components";

interface FileProps {
  path: string;
  returnFunction: () => void;
}

const Button = styled.button`
  padding: 0.3em 0.5em;
  cursor: pointer;
  background-color: ${(props) => props.theme.button.background};
  color: ${(props) => props.theme.button.text};
  border-radius: 0.125em;
  font-weight: 600;
  font-size: 1em;

  &:focus,
  :hover {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.button.focusShadow};
  }
`;

const getFileAsString = (
  path: string,
  setFileString: (newFileString: string) => void
) => {
  fetch(path)
    .then((response) => response.text())
    .then((data) => {
      setFileString(data);
    });
};

const File = ({ path, returnFunction }: FileProps) => {
  const [fileString, setFileString] = useState("");

  getFileAsString(path, setFileString);
  const rawMarkup = marked(fileString);

  return (
    <>
      <Button onClick={returnFunction}>{"Tilbake"}</Button>
      <div dangerouslySetInnerHTML={{ __html: rawMarkup }} />
    </>
  );
};

export default File;
