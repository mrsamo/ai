import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import TagsPage from './components/TagsPage';
import PromptPage from './components/PromptPage';
import CommunityPage from './components/CommunityPage';
import UserPage from './components/UserPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isPromptPage = location.pathname.startsWith('/prompt/');
  const isCommunityPage = location.pathname === '/community';
  const isUserPage = location.pathname.startsWith('/user/');

  return (
    <div className="App">
      {!isHomePage && !isPromptPage && !isCommunityPage && !isUserPage && <Navigation />}
      <main className={isHomePage || isPromptPage || isCommunityPage || isUserPage ? "main-content-full" : "main-content"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/tags" element={<TagsPage />} />
          <Route path="/prompt/:id" element={<PromptPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/user/:username" element={<UserPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
