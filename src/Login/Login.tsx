import React from 'react';
import styles from '../styles/Login.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Login = () => (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
    <form>
    <label>
      <p>Username</p>
      <input type="text" />
    </label>
    <label>
      <p>Password</p>
      <input type="password" />
    </label>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  </div>
); 
  
  export default Login;
