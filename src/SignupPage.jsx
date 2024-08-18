import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // This code will run if the user creation is successful
        alert('User created successfully');
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors here
        alert(errorMessage);
      });
  };

  return (

    <div className="signup-page">
           <h1>  Signup page </h1>
      <label>Email</label>
      <input
        type="email"
        required
        placeholder="Enter your email here"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password</label>
      <input
        type="password"
        required
        placeholder="Enter your password here"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button onClick={createUser}>Signup</button>
    </div>
  );
}

export default SignupPage;
