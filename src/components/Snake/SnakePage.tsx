import React from "react";
import SnakeGame from "./SnakeGame";
import Page from "../../Page";

const texts = {
  title: "Snake!",
};

const SnakePage = () => {
  return (
    <Page title={texts.title}>
      <SnakeGame />
    </Page>
  );
};

export default SnakePage;
