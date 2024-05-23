import React, { useState, useCallback } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
        email: email,
        password: password,
    }
    console.log("Danh sách người dùng", user);
    
  }, [email, password]);

  return (
    <div>
      <h1>Bài 6</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br /><br />
          <input
            type="email"
            placeholder="Nhập email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br /><br />
          <input
            type="password"
            placeholder="Nhập password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}