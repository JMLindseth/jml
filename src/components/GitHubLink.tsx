import React from "react";
import GitHubLogo from "../img/GitHubLogo.png";
import styled from "styled-components";

const Logo = styled.img`
  margin-left: 0.5em;
  height: auto;
  width: 3em;
`;

const GitHubLink = () => {
  const url = "https://github.com/JMLindseth/jml";

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Logo src={GitHubLogo} />
      </a>
    </>
  );
};

export default GitHubLink;
