import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav data-testid="navbar">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}