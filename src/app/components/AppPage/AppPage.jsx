import React, { FC } from "react";
import PageBody from "./PageBody";
import PageHeader from "./PageHeader";
import "./AppPage.css";

interface AppPageProps {
  title: String;
  description: String;
  children: React.ReactNode;
}

const AppPage: FC<AppPageProps> = ({ title, description, children }) => {
  return (
    <main id="app-body" className="app-body">
      <PageHeader title={title} description={description}></PageHeader>
      <PageBody>{children}</PageBody>
    </main>
  );
};

export default AppPage;
