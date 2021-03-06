import React from "react";
import Page from "../../Page";
import Codebox from "./Codebox";

const texts = {
  title: "Interesting Kotlin stuff",
};

const CodeboxPage = () => {
  return (
    <Page title={texts.title}>
      <Codebox />
    </Page>
  );
};

export default CodeboxPage;
