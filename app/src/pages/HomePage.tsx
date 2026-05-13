import { useState, type FormEvent } from 'react';
import ArticleCard from '../components/ArticleCard.js';
import { seededPosts } from '../data/seed.js';

type Post = {
  id: number;
  title: string;
  description: string;
  content: string;
};

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(seededPosts);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    const nextPost: Post = {
      id: posts.length + 1,
      title: title.trim(),
      description: content.trim().slice(0, 120),
      content: content.trim(),
    };

    setPosts(currentPosts => [...currentPosts, nextPost]);
    setTitle('');
    setContent('');
  };

  return (
    <main style={{ padding: '1rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Dev Blog</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Create a new post</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              data-testid="title-input"
              placeholder="Title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              data-testid="content-input"
              placeholder="Content"
              value={content}
              onChange={event => setContent(event.target.value)}
            />
          </div>

          <button type="submit" data-testid="submit-button">
            Create Post
          </button>
        </form>
      </section>

      <section>
        <h2>Posts</h2>
        <div data-testid="posts-container" style={{ display: 'grid', gap: '1rem' }}>
          {posts.map(post => (
            <ArticleCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
