
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import Overview from './pages/Dashboard/Overview';
import MyBlogs from './pages/Dashboard/MyBlogs';
import CreateBlog from './pages/Dashboard/CreateBlog';
import Profile from './pages/Dashboard/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard/overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="blogs" element={<MyBlogs />} />
          <Route path="create" element={<CreateBlog />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
