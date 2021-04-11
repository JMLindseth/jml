import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";
import "codemirror/mode/clike/clike";

const CodeboxWrapper = styled.div`
  width: 50em;
`;

const Codebox = () => {
  return (
    <CodeboxWrapper>
      <CodeMirror
        value='const foo = "bar"'
        options={{
          mode: "text/x-kotlin",
          theme: "material",
          lineNumbers: true,
        }}
      />
    </CodeboxWrapper>
  );
};

export default Codebox;
