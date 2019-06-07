import React, { useState } from 'react';
import { auth } from 'firebase/Firebase';
import styles from './LoginForm.module.scss';
import Button from 'shared/button/Button';
import Loader from 'shared/loader/Loader';

export default () => {
  const [email, setEmail] = useState('bennievanderwel@gmail.com');
  const [password, setPassword] = useState('passpass');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch(err => console.log(err));
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  return (
    <div className={`card ${styles.Container}`}>
      <div className='card-content'>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <label>
            Email:{' '}
            <input
              disabled={loading}
              onChange={handleEmailInput}
              value={email}
            />
          </label>
          <label>
            Password:{' '}
            <input
              disabled={loading}
              type='password'
              onChange={handlePasswordInput}
              value={password}
            />
          </label>
          <Button
            disabled={loading}
            type='submit'
            icon='exit_to_app'
            text='Inloggen'
          />
        </form>
      </div>
      {loading && (
        <div className={styles.Loader}>
          <Loader />
        </div>
      )}
    </div>
  );
};
