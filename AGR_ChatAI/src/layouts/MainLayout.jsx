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
     {/* NEW: Upgrade-to-Pro Tab */}
     <div className="upgrade-tab">
      Upgrade to Pro
    </div>
  </div>
  </>
);

export default MainLayout;
