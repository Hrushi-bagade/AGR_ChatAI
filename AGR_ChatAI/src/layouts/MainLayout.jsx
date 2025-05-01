import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
// import '../assets/css/_layout.css';

const MainLayout = () => (
  <div className="layout">
    <Sidebar/>
    <header className="layout-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
    <main className="layout-content">
      <Outlet />
    </main>
    <footer className="layout-footer">
      © 2025 MyApp
    </footer>
  </div>
);

export default MainLayout;
