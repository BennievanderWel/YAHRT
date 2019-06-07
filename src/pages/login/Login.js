import React from 'react';
import styles from './Login.module.scss';
import LoginForm from 'components/loginForm/LoginForm';

export default () => {
  return (
    <div className={styles.Container}>
      <h3>YAHRT</h3>
      <LoginForm />
    </div>
  );
};
