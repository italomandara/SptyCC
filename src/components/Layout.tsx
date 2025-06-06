import { Outlet } from "react-router";
import SPContainer from "./SPContainer";

const Layout = () => {
  return (
    <div className="layout">
      <SPContainer>
        <Outlet />
      </SPContainer>
    </div>
  );
};

export default Layout;
