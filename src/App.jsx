import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import './App.css'
import {getDatabase,ref,set} from "firebase/database"
import { app } from './firebase'
import SignupPage from "./SignupPage";
import Signin from "./Signin";
const auth = getAuth(app);
function App() {
const signupUser=()=>{
createUserWithEmailAndPassword(auth, 'sarthakpatwa972@gmail.com', "sarthak2").then((value)=>console.log(value));
};
const db=getDatabase(app)

// const putdata=()=>{
//   set(ref (db, "users/sarthak"),{
//     id:1,
//     name:"sarthak",
//     age:21,
//   })
//}

  return (
    <>
      <h1>Firebase React App:-</h1>
     <div className='App'>
 
     {/* <button onClick={signupUser}>putdata</button>   */}
     </div>

     <SignupPage/>
     <Signin/>
    </>
  )
}

export default App
