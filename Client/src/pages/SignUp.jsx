import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom' 
export default function signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Stack’s</span>
            Blogger
        </Link>
        <p className='text-sm mt-5'>This is a demo project. You can sign up with your email and password or with Google</p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form>
            <div className=''>
              <Label value='Your Username'/>
              <TextInput  type='text' placeholder='username' id='username'/>
            </div>
            <div className=''>
              <Label value='Your Email'/>
              <TextInput  type='text' placeholder='Email' id='email'/>
            </div>
            <div className=''>
              <Label value='Your Password'/>
              <TextInput  type='text' placeholder='password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              SignUp
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
