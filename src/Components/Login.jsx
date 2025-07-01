import React from 'react'
import { Link } from 'react-router-dom' 
import { useFormik } from 'formik'
import { LoginSchema } from "../Schema";
import PasswordInput from "../PasswordInput";

import {useState} from 'react'
const Login = () => {

  const [submitted , setsubmitted] = useState(false);

  const {values , errors , handleSubmit , handleChange  , handleBlur , touched ,} = useFormik({

    initialValues : {
      email:"",
      password:"",
      confirm_password:"",

    },

    validationSchema: LoginSchema,

    onSubmit: (values , action) => {
      setsubmitted(true);
      console.log(values);
      action.resetForm();
       setTimeout(() => setsubmitted(false) , 3000);
    },
  })

  


  return (
    <div className='flex  min-h-screen w-full bg-gray-200 px-4  justify-center'>
      <div className=' flex  flex-col shadow-lg shadow-cyan-600  rounded-2xl w-full mt-20  p-8 bg-white  max-w-md  mb-60 '>
        <h1 className='text-blue-600  font-bold text-2xl text-center mb-4 '>  Login   </h1>
        {submitted && (<div className='text-green-500 text-center mb-4 font-semibold'>Login successfully</div>)}
        <form onSubmit={handleSubmit} >
            <div className='mb-4'>
                <label htmlFor='email' className="block text-gray-600 ">  E-mail </label>
                    <input 
                    type='email' 
                    name="email" 
                    placeholder='enter your email' 
                    className={` w-full  mt-1 p-2 border rounded-lg ${errors.email && touched.email ? "border-red-600": "border-gray-300"}`} 
                     value={values.email}
                               onChange={handleChange}
                             onBlur={handleBlur}/>

                               {errors.email && touched.email ? (
                    <p className=' form_error text-red-500'>{errors.email}</p>): null}
            </div>

            <div className='mb-4'>
                <label htmlFor='password' className="block text-gray-600 ">  Password </label>
                    <PasswordInput type='password' 
                    id='passwor'
                    name="password" 
                    placeholder='enter your password' 
                    className={` w-full  mt-1 p-2 border rounded-lg ${errors.email && touched.email ? "border-red-600": "border-gray-300"}`} 
                     value={values.password}
                               onChange={handleChange}
                             onBlur={handleBlur}/>

                               {errors.password && touched.password ? (
                    <p className=' form_error text-red-500'>{errors.password }</p>): null}
            </div>

            <div className='mb-4'>
                <label htmlFor='password' className="block text-gray-600 "> Confirm_Password </label>
                    <PasswordInput type='password' 
                    id='password'
                    autoComplete='confirm_password'
                    name="confirm_password" 
                    placeholder='enter your confirm password' 
                    className= {`w-full  mt-1 p-2 border rounded-lg ${errors.email && touched.email ? "border-red-600": "border-gray-300"}`} 
                     value={values.confirm_password}
                               onChange={handleChange}
                             onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                    <p className='form_error text-red-500'>{errors.confirm_password} </p>): null}
            </div>

            <button type='submit' className='bg-blue-600 w-full rounded-2xl py-2 text-white hover:bg-blue-700 transition '>
            Login
            </button>
            <span className='flex mt-4'>Don't have any account? <Link className='text-blue-800  underline' to={"/"}>Sign-up here</Link> </span>
        </form>
      </div>
    </div>
  )
}

export default Login
