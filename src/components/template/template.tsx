import * as React from "react";
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import SideBar from "./sideBar/sideBar";

export interface PrimaryTemplateProps {}

const PrimaryTemplate: React.FC<PrimaryTemplateProps> = () => {
  return (
    <>
      <Header />
      <SideBar />
      <MainContent />
    </>
  );
};

export default PrimaryTemplate;
