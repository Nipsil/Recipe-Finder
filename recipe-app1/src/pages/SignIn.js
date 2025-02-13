import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic
    if (email === 'test@example.com' && password === 'password') {
      alert('Sign In Successful!');
      closeModal(); // Close modal on success
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
