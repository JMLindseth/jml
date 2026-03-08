import { ReactNode } from "react";
import Nav from "./components/nav/Nav";
import stiler from "./Page.module.css";

interface SideProps {
  children?: ReactNode;
}

const Side = ({ children }: SideProps) => {
  return (
    <div className={stiler.wrapper}>
      <Nav />
      <main className={stiler.innhold}>{children}</main>
    </div>
  );
};

export default Side;
