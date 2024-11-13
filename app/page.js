"use client";
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Our Next.js Form</h1>
      <form style={formStyle}>
        <div style={inputGroupStyle}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      <div style={infoBoxStyle}>
        <p>Email: <span style={infoStyle}>{email}</span></p>
        <p>Password: <span style={infoStyle}>{password ? '••••••••' : ''}</span></p> {/* Masked password */}
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  padding: '40px',
  backgroundColor: '#f0f4f8',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '500px',
  margin: 'auto',
  marginTop: '50px',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#333',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const inputGroupStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ddd',
  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
  transition: 'border-color 0.3s',
};

const buttonStyle = {
  padding: '12px 20px',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#0070f3',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const infoBoxStyle = {
  marginTop: '30px',
  padding: '15px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  width: '100%',
  textAlign: 'left',
};

const infoStyle = {
  color: '#0070f3',
  fontWeight: 'bold',
};
