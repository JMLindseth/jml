import { ReactNode } from "react";
import stiler from "./Page.module.css";

interface SideProps {
  children?: ReactNode;
}

const Side = ({ children }: SideProps) => {
  return (
    <div className={stiler.wrapper}>
      <main className={stiler.innhold}>{children}</main>
    </div>
  );
};

export default Side;
