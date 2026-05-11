import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import ArticleDetailsPage from '../pages/ArticleDetailsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<ArticleDetailsPage id={0} title={''} description={''}/>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}