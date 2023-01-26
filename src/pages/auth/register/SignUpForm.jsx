import React from 'react'

import { Formik, Form, Field } from 'formik';
import * as yup from "yup";


import { Link } from 'react-router-dom';


function SignUpForm() {

    const handleFormSubmit = () => {
        console.log("Working")
    }

  return (
    <Formik
    
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={checkoutSchema}
    >
      {({ values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
            <Form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for='username'>Username</label>
                        <Field
                            id='username'
                            required
                            label="Username"
                            name='username'
                            placeholder="Jone Doe"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.username}
                            error={!!touched.username && !!errors.username}
                            helperText={touched.username && errors.username}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            {errors.username && touched.username ? (
                                    <div className="text-red-500">{errors.username}</div>) : null}
                        </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                               for="email">Email</label>
                        <Field
                            id='email'
                            required
                            label="Email"
                            name='email'
                            placeholder="example@example.com"
                            type="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        
                            {errors.email && touched.email ? (
                                    <div className="text-red-500">{errors.email}</div>) : null}
                    </div>
                                
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for='password'>Password</label>
                        <Field
                            required
                            id="password"
                            label="Password"
                            name='password'
                            placeholder="********"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            error={!!touched.password && !!errors.password}
                            helperText={touched.password && errors.password}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            {errors.password && touched.password ? (
                                    <div className="text-red-500">{errors.password}</div>) : null}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for='confirm_password'>Confirm Password</label>
                        <Field
                            required
                            label="Confirm Password"
                            name='confirm_password'
                            id='confirm_password'
                            placeholder="********"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.confirm_password}
                            error={!!touched.confirm_password && !!errors.confirm_password}
                            helperText={touched.confirm_password && errors.confirm_password}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

                            {errors.confirm_password && touched.confirm_password ? (
                                    <div className="text-red-500">{errors.confirm_password}</div>) : null}
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input 
                                    id="terms" 
                                    aria-describedby="terms" 
                                    type="checkbox" 
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                    required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label  for="terms" 
                                    className="font-light text-gray-500 dark:text-gray-300">I accept the 
                                    <Link to="/"
                                          className="hover:underline decoration-2 hover:text-red-600">
                                        Terms and Conditions
                                    </Link>
                            </label>
                        </div>
                    </div>

                    
                    <button type="submit" 
                            className="w-full text-white bg-red-600 hover:bg-primary-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Create an account
                    </button>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account?
                        <Link   to="/account/login" 
                                className="hover:underline decoration-2 hover:text-red-600 ml-2">
                                Login here
                        </Link>
                    </p>
                </div>
            </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;

const checkoutSchema = yup.object().shape({

    username:  yup
                  .string()
                  .required('Username is required!')
                  .min(5, "Username should not be less then 5 characters.")
                  .max(20, "Username should not be more then 20 characters.")
                  .matches(/^[a-z]/, 'Username must start with a letter')
                  .matches(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters'),
                //   .test('username', 'This username is already taken.', validateUsername),
  
    email:     yup
                 .string()
                 .email('Invalid email')
                 .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email')
                 .required("Email is required!"),
                //  .test('email', 'This email is already taken.', validateEmail),
    password:  yup
                 .string()
                 .required("Password is required")
                 .min(8, 'Password must be at least 8 characters.')
                 .max(32, "Password must not be more then 32 characters.")
                 .matches(/[0-9]/, 'Password must contain at least one digit')
                 .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
                 .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                 .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                 .matches(/[0-9]/, 'Password must contain at least one number')
                 .notOneOf([yup.ref('username'), yup.ref('email')], 'Password cannot be the same as username or email')
                 .required('Password is required'),
  
  
    confirm_password: yup
                .string()
                .required("Confirm password is required")
                .oneOf([yup.ref('password'), null], "Passwords must match!")
  
  });
  


const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };