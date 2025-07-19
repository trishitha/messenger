import React, { useEffect, useState } from 'react';
import Logout from './Logout';

const Welcome = ({ onLogout }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/user', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setUser(data);
        }
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome!</h1>
      {user ? (
        <>
          {user.picture && (
            <img q
              src={user.picture}
              alt="Profile"
              style={{ width: 80, height: 80, borderRadius: '50%', marginTop: '10px' }}
            />
          )}
          <p style={{ marginTop: '10px' }}>
            Hello, {user.name || user.email || 'User'}!
          </p>
        </>
      ) : (
        <p>Loading user info...</p>
      )}
      <Logout onLogout={onLogout} />
    </div>
  );
};

export default Welcome;
