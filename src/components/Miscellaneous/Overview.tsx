import React from "react";
import styled from "styled-components";
import OverviewElement from "./OverviewElement";
import allFiles, { FileElement } from "./files";

interface OverviewProps {
  changeFile: (newFile: string) => void;
}

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Overview = ({ changeFile }: OverviewProps) => {
  return (
    <OverviewWrapper>
      {allFiles.map((element: FileElement, index: number) => {
        return (
          <OverviewElement
            key={index}
            file={element.path}
            title={element.title}
            subtitle={element.subtitle}
            changeFile={changeFile}
          />
        );
      })}
    </OverviewWrapper>
  );
};

export default Overview;
