import React, { ReactNode } from "react";
import "./Container.scss";

export interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <section className="container">{children}</section>
);

export default Container;
