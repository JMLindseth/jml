import React, { useEffect, useState } from "react";
import { Wave } from "react-animated-text";
import styled from "styled-components";
import { randomElementFromArray } from "../../utils/arrayUtils";

const texts = {
  buzzwords: [
    "Synergy",
    "Sustainability",
    "Innovation",
    "Equality",
    "Streamlined",
  ],
};

const BuzzwordBox = styled.div`
  font-size: min(10vw, 10em);
  > div > span {
    font-weight: lighter;
    position: relative;
    text-transform: uppercase;
    text-shadow: -16px 10px 15px black;
    letter-spacing: -0.05em;
    font-family: Garamond, Arial, sans-serif;
    user-select: none;
    transition: all 0.25s ease-out;

    :hover {
      text-shadow: -15px 5px 15px black;
    }
  }
`;

const getNewWord = (activeWord: string) => {
  let newWord = activeWord;

  // Make sure we never set the same word twice, because then the state wouldn't change and we'd exit the infinite useEffect loop
  while (newWord === activeWord) {
    newWord = randomElementFromArray(texts.buzzwords);
  }
  return newWord;
};

const Buzzword = () => {
  const [activeWord, setActiveWord] = useState(
    randomElementFromArray(texts.buzzwords),
  );

  // Infinite loop of re-rendering because we set state while listening to state changes, probably not a great idea
  useEffect(() => {
    setTimeout(() => {
      setActiveWord(getNewWord(activeWord));
    }, 5000);
  });

  return (
    <BuzzwordBox>
      <Wave
        text={activeWord}
        speed={4}
        iterations={1}
        effect="verticalFadeIn"
        effectChange={2}
        effectDuration={0.7}
      />
    </BuzzwordBox>
  );
};

export default Buzzword;
