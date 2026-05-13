import { useState, type FormEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seededPosts } from '../data/seed.js';

type Post = {
  id: number;
  title: string;
  description: string;
  content: string;
};

export default function ArticleDetailsPage() {
  const { id } = useParams();
  const postId = Number(id);
  const post = seededPosts.find((post): post is Post => post.id === postId);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  if (!post) {
    return (
      <main style={{ padding: '1rem' }}>
        <h1>Post not found</h1>
        <Link to="/blog">Back to blog</Link>
      </main>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!comment.trim()) {
      return;
    }

    setComments(current => [...current, comment.trim()]);
    setComment('');
  };

  return (
    <main style={{ padding: '1rem', maxWidth: 800, margin: '0 auto' }}>
      <Link to="/blog" data-testid="back-to-blog">
        Back to blog
      </Link>

      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.content}</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Comments</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem', maxWidth: 600 }}>
          <textarea
            data-testid="comment-input"
            placeholder="Write a comment"
            value={comment}
            onChange={event => setComment(event.target.value)}
          />
          <button type="submit" data-testid="submit-comment">
            Submit Comment
          </button>
        </form>

        <div data-testid="comments-list" style={{ marginTop: '1rem' }}>
          {comments.map((text, index) => (
            <div key={index} data-testid={`comment-item-${index}`}>
              {text}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}