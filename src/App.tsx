import { useState } from "react";
import "reset-css";
import { StepBackwardOutlined } from "@ant-design/icons";

import "../src/assets/styles/global.scss";

import ButtonCom from "./components/ButtonCom";
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      后台管理系统练习
      <ButtonCom />
      <StepBackwardOutlined style={{ fontSize: "28px" }} />
      {/* 占位符组件，类似于窗口，用来展示组件的 */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
