import React from "react";
import Page from "../../Page";
import styled from "styled-components";
import { useRef } from "react";
import Buzzword from "./Buzzword";

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

const Frontpage = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Page>
      <ContentBlock ref={ref}>
        <Buzzword />
      </ContentBlock>
    </Page>
  );
};

export default Frontpage;
