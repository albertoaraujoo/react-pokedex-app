import React, { ReactNode } from "react";

type TesteProps = {
  children: ReactNode;
};

const TipoComponent: React.FC<TesteProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default TipoComponent;
