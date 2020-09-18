import React, { useState } from "react";

import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    credentials: {
      username: '',
      password: ''
    }
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const login = e => {
    e.preventDefault();

  }

  return (
    <div className='login-container'>
      <form onSubmit={login}>
        <label>Username: </label>
        <input 
          type='text'
          name='username'
          value={credentails}
        />
      </form>
    </div>
  );
};

export default Login;
