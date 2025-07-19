import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    fetch('http://localhost:8080/logout', {
      method: 'POST',
      credentials: 'include',
    })
      .then(() => {
        if (onLogout) onLogout();
        navigate('/login', { replace: true });
      });
  };

  return (
    <button onClick={handleLogout} style={{ margin: '20px', padding: '10px 20px' }}>
      Logout
    </button>
  );
};

export default Logout;
