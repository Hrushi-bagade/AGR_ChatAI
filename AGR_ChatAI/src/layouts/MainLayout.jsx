import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
const MainLayout = () => (
  <>
<div className="app-layout">
    <Sidebar />
    <main className="app-main">
      <Outlet />
    </main>
  </div>
  </>
);

export default MainLayout;
