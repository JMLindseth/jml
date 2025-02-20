import React from "react";
import styled from "styled-components";
import Link from "./components/generics/Link";

const NavigationBarGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LinkRightPadded = styled(Link)`
  margin-right: 1em;
`;

const texts = {
  home: "Home!",
  snake: "Snake",
};

interface LinkProps {
  text: string;
  href: string;
}

const LinkWrapped = ({ text, href }: LinkProps) => {
  return <LinkRightPadded href={href}>{text}</LinkRightPadded>;
};

const NavigationBar = () => {
  return (
    <NavigationBarGrid>
      <LinkWrapped text={texts.home} href={"/"} />
      <LinkWrapped text={texts.snake} href={"/snake"} />
    </NavigationBarGrid>
  );
};

export default NavigationBar;
