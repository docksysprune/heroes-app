import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';


const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    })
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className="text-center">
        <h1 className={`display-3 text-white ${styles.title}`}>My Heroes App</h1>
        <hr />
        <button onClick={onLogin} className="btn btn-primary btn-lg m-5">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
