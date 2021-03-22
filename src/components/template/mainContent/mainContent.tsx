import * as React from "react";
import { GlobalContext } from "../../../context/globalContext";

export interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  const gInfo = React.useContext(GlobalContext);

  return (
    <>
      <h1>MainContent</h1>
      <h1>{gInfo?.userInformation?.name}</h1>
    </>
  );
};

export default MainContent;
