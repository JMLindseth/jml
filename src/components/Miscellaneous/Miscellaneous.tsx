import React, { useState } from "react";
import Overview from "./Overview";
import File from "./File";

const Miscellaneous = () => {
  const [filePath, setFilePath]: [string, (newFilePath: string) => void] =
    useState("");

  const changeFile = (newFile: string) => {
    setFilePath(newFile);
  };

  const resetFilePath = () => {
    changeFile("");
  };

  return (
    <>
      {filePath === "" ? (
        <Overview changeFile={changeFile} />
      ) : (
        <File path={filePath} returnFunction={resetFilePath} />
      )}
    </>
  );
};

export default Miscellaneous;
