import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import BlogsPage from './pages/BlogsPage.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import AuthorPage from './pages/AuthorPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DashboardOverview from './pages/DashboardOverview.jsx';
import DashboardPosts from './pages/DashboardPosts.jsx';
import DashboardAnalytics from './pages/DashboardAnalytics.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/author" element={<AuthorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Nested Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardOverview />} />
              <Route path="posts" element={<DashboardPosts />} />
              <Route path="analytics" element={<DashboardAnalytics />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;