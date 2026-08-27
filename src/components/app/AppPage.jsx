import React from "react";
import PageBody from "./PageBody";
import PageHeader from "../../temp/app/components/AppPage/PageHeader";
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
