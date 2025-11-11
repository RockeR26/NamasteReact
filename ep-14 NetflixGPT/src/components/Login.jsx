import React, { useRef, useState } from 'react'
import { validateData } from '../assets/validate';
import { auth } from '../assets/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
const [toggleValue,setToggleValue]=useState(true);
const [message,setMessage]=useState(null)
const email=useRef();
const password=useRef();
const name= useRef();




const toggleForm=()=>{
  setToggleValue(!toggleValue);
}

const handleSubmit=()=>{
    
  const message=validateData(name.current?.value,password.current.value,email.current.value);
  setMessage(message);

  if(message)return;

  if(toggleValue){
    //signIn
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
        console.log(user);
        email.current.value="";
        password.current.value="";

    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(errorCode);
    email.current.value="";
    password.current.value="";
  });

  }else{
    //signup

createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
        email.current.value="";
        password.current.value="";
        name.current.value="";
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    console.log(user);
    email.current.value="";
    password.current.value="";
    name.current.value="";
    // .. 
  });
  }
  
}

  return (
    <div className='relative'>
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/IN-en-20251013-TRIFECTA-perspective_7bc35267-b383-4fb3-b173-eae32292d42e_large.jpg" alt="bg"  className='h-screen w-screen'/>
      <form onSubmit={(e)=>e.preventDefault()} className='bg-black/90 text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  mx-auto w-90  p-12 rounded-lg bg-opacity-50 '>
        <h1 className='text-2xl font-bold my-2 p-2 mx-auto'>{toggleValue?"Sign In" : "Sign Up"}</h1>
        {!toggleValue&&<input ref={name} className='p-2 my-6 mx-auto block w-full bg-gray-700 rounded-sm' type="text" placeholder='Full Name'/>}
        <input ref={email} className='p-2 my-6 mx-auto block w-full bg-gray-700 rounded-sm' type="email" placeholder='Email Address'/>
        <input ref={password} className='p-2 my-4 mx-auto block bg-gray-700 w-full rounded-sm' type="password" placeholder='Password'/>
        {message&&<p className='text-red-600 text-xs font-bold'>{message}</p>}
        <button className='p-2 my-4 bg-red-700 mx-auto w-full rounded-sm cursor-pointer hover:bg-red-400' onClick={handleSubmit}>{toggleValue?"Sign In" : "Sign Up"}</button>
        <p className='text-gray-400 text-xs'>{toggleValue?"New to Netflix?" : "Already have an account?"} <span className='text-white text-xs cursor-pointer hover:underline' onClick={toggleForm}>{!toggleValue?"Sign-in" : "Sign-up"} now</span></p>
      </form>
    </div>
  )
}

export default Login