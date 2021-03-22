import * as React from "react";
import { GlobalContext } from "../../../context/globalContext";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const gInfo = React.useContext(GlobalContext);

  return (
    <>
      <h1>Header</h1>
      <h1>{gInfo?.userInformation?.name}</h1>
    </>
  );
};

export default Header;
