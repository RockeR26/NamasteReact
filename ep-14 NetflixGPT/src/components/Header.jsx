import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../assets/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { LOGO } from '../assets/links';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((state)=>state.user.user)
  const dispatch=useDispatch();
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
        const{uid,email,displayName,photoURL}=user
        dispatch(addUser({uid,email,displayName,photoURL}));
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        navigate("/")
      }
    });
    //unsubscribe the event onAuthStateChange
    return ()=> unsubscribe();

  },[])

  const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
      dispatch(removeUser());
    }).catch((error) => {
  // An error happened.
      console.log(error);
    });

  }


  return (
    <div className='absolute bg-linear-to-b from-black w-full z-10 flex justify-between'>
      <img src={LOGO} 
        className='w-38 p-2'      
      alt="logo" />
      {user&&<div className='my-2 flex justify-center'>
        <img className='w-6/12 h-10/12 rounded-lg mx-2' src={user.photoURL} alt="user-icon" />
        <button className='text-gray-800 mr-3 cursor-pointer' onClick={handleSignOut}>Signout</button>
      </div>}
    </div>
  )
}

export default Header