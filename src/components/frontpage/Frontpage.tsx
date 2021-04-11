import React from "react";
import Page from "../../Page";
import styled from "styled-components";
import { useRef } from "react";
import DoubleArrowDown from "../../img/doubleArrowDown";
import Intro from "./Intro";
import Buzzword from "./Buzzword";
import Quote from "./Quote";

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

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 10em;
`;

const ColoredArrow = styled(DoubleArrowDown)`
  fill: ${({ theme }) => theme.text};

  &:hover {
    padding-top: 0.5em;
  }
`;

const Frontpage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickArrow = () => {
    const top = ref.current?.getBoundingClientRect().height;
    return window.scrollTo({ top: top, behavior: "smooth" });
  };

  return (
    <Page>
      <ContentBlock ref={ref}>
        <Buzzword />
        <ArrowButton tabIndex={-1} onClick={onClickArrow} aria-hidden>
          <ColoredArrow />
        </ArrowButton>
      </ContentBlock>

      <ContentBlock>
        <Intro />
        <Quote />
      </ContentBlock>
    </Page>
  );
};

export default Frontpage;
