import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState('');

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const username =
      (document.getElementById('username') as HTMLInputElement).value;

    const password =
      (document.getElementById('password') as HTMLInputElement).value;

    if (
      username === 'testuser' &&
      password === 'Password123'
    ) {
      localStorage.setItem('auth', 'true');
      window.location.href = '/';
      return;
    }

    setError('Invalid credentials');
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        id="username"
        data-testid="username-input"
        placeholder="Username"
      />

      <input
        id="password"
        data-testid="password-input"
        type="password"
        placeholder="Password"
      />

      <button
        data-testid="login-button"
        type="submit"
      >
        Login
      </button>

      {error && (
        <p data-testid="login-error">
          {error}
        </p>
      )}
    </form>
  );
}