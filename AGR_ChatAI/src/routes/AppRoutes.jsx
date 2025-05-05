import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import SignIn from '../pages/SignIn';
import StartChat from '../pages/StartChat';


const AppRoutes = () => (
  <Routes>
    {/* Routes without layout */}
    <Route path="/login" element={<SignIn />} />

    {/* Routes with MainLayout wrapper */}
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/StartChat" element={<StartChat />} />

      {/* catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default AppRoutes;
