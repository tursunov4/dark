import React, { useRef, useState } from 'react'
import Loading from '../Loading/Loading';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading , setLoading] = useState(false)
    const handleSubmit =(evt)=>{
        setLoading(true)
       evt.preventDefault()
       const token ={
         email:emailRef.current.value,
         password : passwordRef.current.value
       };
       setTimeout(()=>{
         setLoading(false)
         window.location.reload()
       },[2000])
       window.localStorage.setItem('token' , JSON.stringify(token))
    }
  return (
     <>
       <form onSubmit={handleSubmit} className='w-[450px] mx-auto mt-[100px] flex flex-col space-y-3 py-8 px-5 bg-blue-300  rounded-md'>
        <h2 className='text-[28px] text-center text-black font-bold'>Login Page</h2>
        <input ref={emailRef} type="email"
         className='border-slate-500 border-2 w-full rounded-md p-2 outline-none focus:border-blue-500'
         placeholder='email'
        />
          <input ref={passwordRef} type="password"
         className='border-slate-500 border-2 w-full rounded-md p-2 outline-none focus:border-blue-500'
         placeholder='password'
        />
        <button className='bg-green-500 p-2 w-full text-white font-semibold rounded-md'>
            Submit
        </button>
    </form>
    {loading &&  <Loading/> }
    
     </>
  )
}

export default Login