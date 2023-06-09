import { useState } from "react";
import "reset-css";

import "../src/assets/styles/global.scss";
import { Outlet, Link, useRoutes } from 'react-router-dom'
import routes from './router/index';

function App() {
  const outlet = useRoutes(routes)
  console.log(outlet, 'outlet')
  return (
    <div className="App">
      后台管理系统练习
      <hr />
      {/* 占位符组件，类似于窗口，用来展示组件的 */}
      <Link to={'/home'}>Home</Link> |
      <Link to={'/about'}>About</Link> |
      <Link to={'/user'}>User</Link> |
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  );
}

export default App;
