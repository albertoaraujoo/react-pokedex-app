import React, { ReactNode } from "react";

type TesteProps = {
  children: ReactNode;
};

const TypeComponent: React.FC<TesteProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default TypeComponent;
