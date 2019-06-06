import React, { useContext, useState } from 'react';
import { AppContext } from 'App.context';
import { auth } from 'firebase/Firebase';

export default () => {
  const { setAuthenticated } = useContext(AppContext);
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
    <div>
      {loading ? 'Loading..' : ''}
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input onChange={handleEmailInput} value={email} />
        </label>
        <label>
          Password:{' '}
          <input
            type='password'
            onChange={handlePasswordInput}
            value={password}
          />
        </label>
        <button type='submit'>Inloggen</button>
      </form>
    </div>
  );
};
