import React, { useState } from "react";
import Dropdown, { Option } from "react-dropdown";
import { UnControlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";
import "codemirror/mode/clike/clike";
import codeSnippets from "./KotlinCodeSnippets";

const texts = {
  codeDropdownPlaceholder: "Choose code block",
  fontDropdownPlaceholder: "Choose font size",
};

const DropdownRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

interface CodeAreaProps {
  fontSize: number;
}

const CodeArea = styled(CodeMirror)<CodeAreaProps>`
  width: 60em;

  .CodeMirror {
    font-size: ${(props) => `${props.fontSize}px`};
    height: auto;
  }

  .CodeMirror-scroll {
    min-height: 25rem;
    max-height: 50rem;
  }
`;

const Codebox = () => {
  const [activeCode, setActiveCode]: [string, (arg: string) => void] = useState(
    'Val myString = "Hello World!"',
  );

  const changeSize = (chosenElement: Option) => {
    setActiveCode(chosenElement.value);
  };

  const codeOptions: Option[] = [
    { value: codeSnippets.extensionFunction, label: "Extension Function" },
    { value: codeSnippets.higherOrder, label: "Higher-Order Function" },
    { value: codeSnippets.infixMethod, label: "Infix Function" },
    {
      value: codeSnippets.backtickMethodName,
      label: "Function name in backticks",
    },
    { value: codeSnippets.trailingComma, label: "Trailing comma" },
  ];

  const [fontSize, setFontSize]: [number, (arg: number) => void] = useState(16);

  const changeFont = (chosenElement: Option) => {
    setFontSize(parseInt(chosenElement.value));
  };

  const fontOptions: Option[] = [
    { value: "8", label: "8" },
    { value: "12", label: "12" },
    { value: "16", label: "16" },
    { value: "20", label: "20" },
    { value: "24", label: "24" },
    { value: "28", label: "28" },
    { value: "32", label: "32" },
    { value: "64", label: "64" },
  ];

  return (
    <div>
      <DropdownRow>
        <Dropdown
          options={codeOptions}
          onChange={(e) => changeSize(e)}
          placeholder={texts.codeDropdownPlaceholder}
        />
        <Dropdown
          options={fontOptions}
          onChange={(e) => changeFont(e)}
          placeholder={texts.fontDropdownPlaceholder}
        />
      </DropdownRow>
      <CodeArea
        value={activeCode}
        options={{
          mode: "text/x-kotlin",
          theme: "material",
          lineNumbers: true,
        }}
        fontSize={fontSize}
      />
    </div>
  );
};

export default Codebox;
