import "./index.scss";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br />
        {/* <span className="bottom-tags-html">&lt;/html&gt;</span> */}
      </div>
    </div>
  );
};

export default Layout;
