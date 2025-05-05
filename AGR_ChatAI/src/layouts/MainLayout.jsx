import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const MainLayout = () => (
  <>
    <div className="app-layout">
      <Sidebar />
      <main className="app-main">
        <Outlet />
      </main>
      {/* NEW: Upgrade-to-Pro Tab */}
      <div className="upgrade-tab">
        <div className="upgrade-content">
          <span className="upgrade-text">Upgrade to Pro</span>
          <span className="upgrade-icon">✨</span>
        </div>
      </div>
    </div>
  </>
);

export default MainLayout;
