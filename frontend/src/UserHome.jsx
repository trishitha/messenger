import React, { useEffect, useState } from 'react';

const UserHome = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/user', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;
  if (user.error) return <div>{user.error}</div>;

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Hi, {user.name || user.email}!</h2>
    </div>
  );
};

export default UserHome;
