import React from 'react'


// import React Router Components
import { Link } from 'react-router-dom'


import PasswordResetForm from './PasswordResetForm'

const PasswordReset = () => {
  return (
    <main id='content'>
        <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white min-h-96">
                <div className="container xl:max-w-7xl mx-auto px-4">
                    <div className="flex justify-center px-6 my-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        
                            <div style={{ backgroundImage: "url('https://source.unsplash.com/oWTW-jNGl9I/600x800')" }}
                                 className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                                
                            </div>
                        
                            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">

                                <div className="px-8 mb-4 text-center">
                                    <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                                    <p className="mb-4 text-sm text-gray-700">
                                        Forgotten your password? Enter your email address below, and we'll email instructions for setting a new one.
                                    </p>
                                </div>

                                <PasswordResetForm />

                               
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </main>
  )
}

export default PasswordReset


// // style="background-image: url('https://source.unsplash.com/oWTW-jNGl9I/600x800')"


{/* <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" method="POST">
                                    

<div className="mb-4">
    <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
    <input 
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
            type="email" 
            name="email" 
            placeholder="Enter Email Address..." />
</div>



<div className="mb-6 text-center">
    <button
            className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
            type="submit">
            Reset Password
    </button>
</div>

<hr className="mb-6 border-t" />



<div className="text-center">
    Don't have an account?
    <Link to="/account/register"
          className="inline-block text-sm text-blue-500 align-baseline  hover:underline decoration-2 hover:text-red-600">
          Create one
    </Link>
</div>

<div className="text-center">
    Already have an account? 
    <Link to="/account/login"
          className="inline-block text-sm text-blue-500 align-baseline  hover:underline decoration-2 hover:text-red-600">
          Login
    </Link>
</div>

</form> */}