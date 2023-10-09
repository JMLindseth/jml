import React from "react";
import styled from "styled-components";

const Opening = styled.p`
  font-weight: bold;
`;

const texts = {
  opening: "Velkommen! Jeg heter John Martin, og jeg skriver kode.",
  body: "Her kan jeg finne på å legge til ting jeg lager og/eller finner som kan være interessant å dele.",
};

const Intro = () => {
  return (
    <div>
      <Opening>{texts.opening}</Opening>
      <p>{texts.body}</p>
    </div>
  );
};

export default Intro;
