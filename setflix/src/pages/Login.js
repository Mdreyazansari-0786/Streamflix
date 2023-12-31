import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';


const Login= () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState();
    const{User,logIn}=UserAuth();
    const navigate=useNavigate();
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError('')
        navigate("/");
        try {
            await logIn(email,password);
            
            
                 
        } catch (error) {
            console.log(error)
            setError(error.message);
            
        }

    }
    
  return (
    <>
    <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/2f69dcef-463f-44da-b3b9-662b65f33f82/IN-en-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold flex justify-center '>SignIn</h1>
                    {error ? <p className='p-3 bg-red-500 my-2 rounded'>{error}</p> : null}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email' />
                        <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' />
                        <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700'>Login</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type="checkbox"/>Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-4 '><span className='text-gray-600'>New to Netflix?
                        </span>
                        <Link to={'/SignUp'}>SignUp</Link></p>
                    </form>
                    

                </div>

            </div>

        </div>

    </div>
    
    </>
    
  )
}

export default Login;