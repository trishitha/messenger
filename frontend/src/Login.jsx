import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Redirect to Spring Boot OAuth2 endpoint
    window.location.href = 'http://localhost:8080/oauth2/authorization/google?prompt=select_account';
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '100px'
    }}>
      <h2>Login with Google</h2>
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: '#4285F4',
          color: 'white'
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
