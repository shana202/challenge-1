// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//pages
import BlogPostListPage from './pages/BlogPostListPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<BlogPostListPage />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
