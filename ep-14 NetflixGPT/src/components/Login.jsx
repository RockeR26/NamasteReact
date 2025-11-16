import React, { useRef, useState } from 'react'
import { validateData } from '../assets/validate';
import { auth } from '../assets/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { BGIMG, DP } from '../assets/links';

const Login = () => {
const [toggleValue,setToggleValue]=useState(true);
const [message,setMessage]=useState(null)
const email=useRef();
const password=useRef();
const name= useRef();
const navigate=useNavigate();
const dispatch=useDispatch();




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
    const{uid,email,displayName,photoURL}=user
        dispatch(addUser({uid,email,displayName,photoURL}));
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
    updateProfile(auth.currentUser, {
      displayName:name.current.value, photoURL:DP
    }).then(() => {
        const{uid,email,displayName,photoURL}=auth.currentUser
        dispatch(addUser({uid,email,displayName,photoURL}))
    }).catch((error) => {
      // An error occurred
      // ...
      console.log(error);
      
    });
        email.current.value="";
        password.current.value="";
        name.current.value="";
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(errorCode);
    email.current.value="";
    password.current.value="";
    name.current.value="";
    // .. 
  });
  }
  
}

  return (
    <>
    <Header/>
    <div className='relative'>
      <img  src={BGIMG} alt="bg"  className='h-screen w-screen'/>
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
  </>
  )
}

export default Login