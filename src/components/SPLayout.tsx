import { Outlet } from "react-router";
import SPContainer from "./SPContainer";

const SPLayout = () => {
  return (
    <div className="layout">
      <SPContainer>
        <Outlet />
      </SPContainer>
    </div>
  );
};

export default SPLayout;
