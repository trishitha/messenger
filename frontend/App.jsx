import React, { useEffect, useState } from 'react';
import Login from './src/Login';
import UserHome from './src/UserHome';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/user', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) setAuthenticated(true);
        else setAuthenticated(false);
      });
  }, []);

  return authenticated ? <UserHome /> : <Login />;
};

export default App;
