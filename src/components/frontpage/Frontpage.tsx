import React from "react";
import Page from "../../Page";
import { useRef } from "react";

const Frontpage = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Page />
  );
};

export default Frontpage;
