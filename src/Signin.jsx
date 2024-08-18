import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth=getAuth(app)

    const signinUser=()=>{
        signInWithEmailAndPassword(auth,email,password).then(value=>console.log("signin success")
    ).catch((err)=>console.log(err));
    }

  return (
    <div> 
        <h1>  Signin page </h1>

       <label> enter email</label>
       <input
        type="email"
        required
        placeholder="Enter your email here"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      
      />
        {/* onChange={(e) => setEmail(e.target.value)}
        value={email} */}
        
        <label> enter password</label>
       <input
        type="password"
        required
        placeholder="Enter samarth password here"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
       <button onClick={signinUser}>SignIn</button>

    </div>
  )
}
