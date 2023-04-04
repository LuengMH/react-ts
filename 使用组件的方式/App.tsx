import { useState } from "react";
import "reset-css";
import { StepBackwardOutlined } from "@ant-design/icons";

import "../src/assets/styles/global.scss";

import ButtonCom from "./components/ButtonCom";
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      后台管理系统练习
      <hr />
      {/* <ButtonCom />
      <StepBackwardOutlined style={{ fontSize: "28px" }} /> */}
      {/* 占位符组件，类似于窗口，用来展示组件的 */}
      <Link to={'/home'}>Home</Link> |
      <Link to={'/about'}>About</Link> |
      <Link to={'/user'}>User</Link> |
      <Outlet></Outlet>
    </div>
  );
}

export default App;
