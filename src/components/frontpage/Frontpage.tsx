import Page from "../../Page";
import styled from "styled-components";
import {Wave} from "react-animated-text";
import {useRef} from "react";
import DoubleArrowDown from "../../img/doubleArrowDown";
import Intro from "./Intro";

const texts = {
  buzzwords: [
    'Synergy',
    'Sustainability',
    'Innovation',
    'Equality',
    'Streamlined',
  ],
}

const ContentBlock = styled.div`
  min-height: 100vmin;
  padding: 25vmin 5vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  > * {
    max-width: 100%;
  }
`;

const Buzzword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(10vw, 10em);
`

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 10em;
`;

const ColoredArrow = styled(DoubleArrowDown)`
  fill: ${({theme}) => theme.text};

  &:hover {
    padding-top: .5em;
  }
`

const Frontpage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickArrow = () => {
    const top = ref.current?.getBoundingClientRect().height;
    return window.scrollTo({top: top, behavior: "smooth"});
  };

  return (<Page>
    <ContentBlock ref={ref}>
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
        <ColoredArrow/>
      </ArrowButton>
    </ContentBlock>

    <ContentBlock>
      <Intro />
    </ContentBlock>
  </Page>)
}

const randomWord = () => {
  const randomIndex = Math.floor(Math.random() * texts.buzzwords.length);

  return texts.buzzwords[randomIndex];
}

export default Frontpage;
