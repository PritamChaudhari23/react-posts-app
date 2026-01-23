import React from "react";
import { FC } from "react";

interface PageBodyProps {
  children: React.ReactNode;
}

const PageBody: FC<PageBodyProps> = ({ children }) => {
  return (
    <section id="page-body" className="page-body">
      {children}
    </section>
  );
};

export default PageBody;
