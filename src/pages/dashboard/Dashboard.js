import React from 'react';
import { auth } from 'firebase/Firebase';

export default () => {
  return (
    <div>
      Dashoard <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};
