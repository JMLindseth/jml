import React from "react";
import Page from "../../Page";
import Miscellaneous from "./Miscellaneous";

const texts = {
  title: "Hodgepodge of stuff",
};

const MiscellaneousPage = () => {
  return (
    <Page title={texts.title}>
      <Miscellaneous />
    </Page>
  );
};

export default MiscellaneousPage;
