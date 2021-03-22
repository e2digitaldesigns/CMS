import * as React from "react";
import { GlobalContext } from "../../../context/globalContext";

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const gInfo = React.useContext(GlobalContext);

  return (
    <>
      <h1>SideBar</h1>
      <h1>{gInfo?.userInformation?.name}</h1>
    </>
  );
};

export default SideBar;
