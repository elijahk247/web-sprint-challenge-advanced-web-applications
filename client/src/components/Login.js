import React, { useState } from "react";

import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  const [user, setUser] = useState({
    credentials: {
      username: '',
      password: ''
    }
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setUser({
      credentials: {
        ...user.credentials,
        [name]: value
      }
    });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('login', user.credentials)
        .then(res => {
          console.log(res)

          window.localStorage.setItem('token', res.data.payload);
          history.push('/bubblePage');
        })
        .catch(err => {
          console.log('Error: ', err);
        })
  }

  return (
    <div className='login-container'>
      <form onSubmit={login}>
        <label>Username: </label>
        <input 
          type='text'
          name='username'
          placeholder='input username'
          value={user.credentials.username}
          onChange={handleChange}
        />

        <label>Password: </label>
        <input 
          type='password'
          name='password'
          placeholder='input password'
          value={user.credentials.password}
          onChange={handleChange}
        />

        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
