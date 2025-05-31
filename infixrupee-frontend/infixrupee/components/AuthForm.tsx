
'use client';
import { useState } from 'react';

interface AuthFormProps {
  isSignup?: boolean;
}

export default function AuthForm({ isSignup = false }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted ${isSignup ? 'Signup' : 'Login'} with email: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-primary p-6 rounded-xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">
          {isSignup ? 'Create an Account' : 'Welcome Back'}
        </h2>

        {isSignup && (
          <input
            className="w-full p-3 rounded bg-white text-black"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          className="w-full p-3 rounded bg-white text-black"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-3 rounded bg-white text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignup && (
          <input
            className="w-full p-3 rounded bg-white text-black"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded"
        >
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>

        <div className="text-center text-sm">
          {isSignup ? (
            <>
              Already have an account? <a href="/login" className="underline">Sign in</a>
            </>
          ) : (
            <>
              Don’t have an account? <a href="/signup" className="underline">Sign up</a>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
