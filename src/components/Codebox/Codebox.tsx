import React, { useState } from "react";
import Dropdown, { Option } from "react-dropdown";
import { UnControlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";
import "codemirror/mode/clike/clike";

const CodeboxWrapper = styled.div`
  width: 50em;
`;

const codes = {
  extensionFunction: `
data class Foo(
  val bar: String,
)

fun Foo.doStuff() {
    println("I print $bar")
}

val myFoo = Foo("Hello World!")

myFoo.doStuff() // => "I print Hello World"
`,
  higherOrder: `
fun foo(stringParam: String, methodParam: () -> Unit) {
  println("I got $stringParam")

  methodParam();
}

fun main() {
  val myString = "Test"

  foo(myString) {
    println("This is printed last");
  }
}

main()  // => I got Test
        // => This is printed last
  `,
};

const Codebox = () => {
  const [activeCode, setActiveCode]: [string, (arg: string) => void] = useState(
    'Val myString = "Hello World!"'
  );

  const changeSize = (chosenElement: Option) => {
    setActiveCode(chosenElement.value);
  };

  const options: Option[] = [
    { value: codes.extensionFunction, label: "Extension Function" },
    { value: codes.higherOrder, label: "Higher-Order Function" },
  ];
  return (
    <CodeboxWrapper>
      <Dropdown
        options={options}
        onChange={(e) => changeSize(e)}
        placeholder="Choose code block"
      />
      <CodeMirror
        value={activeCode}
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
