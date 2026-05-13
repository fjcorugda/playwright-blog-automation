import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import BlogPage from '../pages/BlogPage.js';
import AboutPage from '../pages/AboutPage.js';
import LoginPage from '../pages/LoginPage.js';
import ArticleDetailsPage from '../pages/ArticleDetailsPage.js';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<ArticleDetailsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}