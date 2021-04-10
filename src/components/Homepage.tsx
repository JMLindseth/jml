import Page from "../Page";
import styled from "styled-components";
import {Wave} from "react-animated-text";
import {useRef} from "react";
import DoubleArrowDown from "../img/doubleArrowDown";

const texts = {
  buzzwords: [
    'Synergy',
    'Sustainability',
    'Innovation',
    'Equality',
    'Streamlined',
  ],
}

const Buzzword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  font-size: 10em;
`

const ArrowButton = styled.button`
  margin-top: 10em;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ColoredArrow = styled(DoubleArrowDown)`
  fill: ${({ theme }) => theme.text};
  
  &:hover {
    padding-top: .5em;
  }
`

const Homepage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickArrow = () => {
    const top = ref.current?.getBoundingClientRect().height;
    return window.scrollTo({ top: top, behavior: "smooth" });
  };

  return (<Page>
    <Buzzword>
      <Wave
        text={randomWord()}
        speed={4}
        iterations={1}
        effect="verticalFadeIn"
        effectChange={2}
        effectDuration={0.7}
      />
    </Buzzword>
    <ArrowButton tabIndex={-1} onClick={onClickArrow} aria-hidden>
      <ColoredArrow />
    </ArrowButton>
  </Page>)
}

const randomWord = () => {
  const randomIndex = Math.floor(Math.random() * texts.buzzwords.length);

  return texts.buzzwords[randomIndex];
}

export default Homepage;
