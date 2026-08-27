import React from "react";
import PageBody from "./PageBody";
import PageHeader from "./PageHeader";
import "./AppPage.css";

const AppPage = ({ title, description, children }) => {
  return (
    <main id="app-body" className="app-body">
      <PageHeader title={title} description={description} />
      <PageBody>{children}</PageBody>
    </main>
  );
};

export default AppPage;
