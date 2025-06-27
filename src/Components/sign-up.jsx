

import { ErrorMessage, useFormik } from "formik";

import { signUpschema } from "../Schema";

function SignupForm(){


    const {values , errors, touched, handleSubmit , handleBlur , handleChange} = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            confirm_password:'',
        },

        validationSchema:signUpschema,

        onSubmit: (values , action) => {
           
            console.log(values);
           action.resetForm();

        },});
       
            
        
       

        return (
            <>
            <div className="min-h-screen h-full flex item-center justify-center bg-gray-100 px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md mb-45 mt-20 shadow-cyan-700">
                    <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600">Full Name</label>
                        <input className="w-full mt-1 p-2 border rounded-lg" type="text" name="name" 
                        placeholder="enter your name"
                        value={values.name}
                        onChange={handleChange}
                             onBlur={handleBlur}
                           />
                           {errors.name && touched.name ? (
                           <p className="form_error  " >{errors.name}</p>): null}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">E-mail</label>
                             <input 
                             className="w-full mt-1 p-2 border rounded-lg " 
                             type="email" 
                             name="email"
                               placeholder="enter your email"
                               value={values.email}
                               onChange={handleChange}
                             onBlur={handleBlur}
                            /> 
                            {errors.email && touched.email ? (
                           <p className="form_error text-black-500" >{errors.email}</p>): null}
                            
                        </div>
                          <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                             <input 
                             className="w-full mt-1 p-2 border rounded-lg" 
                             type="password" 
                             name="password"  
                               placeholder="enter your  password"
                               value={values.password}
                               onChange={handleChange}
                             onBlur={handleBlur}
                             /> 
                             {errors.password && touched.password ? (
                           <p className="form_error" >{errors.password}</p>): null}
                             
                        </div>
                         
                          <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Confirm_Password</label>
                             <input 
                             className="w-full mt-1 p-2 border rounded-lg" 
                             type="password" 
                             name="confirm_password" 
                             placeholder="enter your confirm password"
                             value={values.confirm_password}
                             onChange={handleChange}
                             onBlur={handleBlur}
                      /> 
                      {errors.confirm_password && touched.confirm_password ? (
                           <p className="form_error text-red-400" >{errors.confirm_password}</p>): null}
                            
                        </div>
   

                        <button
                        type="submit" className= " w-25 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Sign Up</button>
                    
                    <span className="mt-4 flex" >Already have an account ?  </span>
                    </form>
                </div>

            </div>
            </>
        )

    }

    


export default SignupForm