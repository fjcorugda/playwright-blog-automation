import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import { seededPosts } from '../data/seed';

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <h1 data-testid="blog-page-title">
        Blog
      </h1>

      {seededPosts.map(post => (
        <ArticleCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </>
  );
}