import * as yup from 'yup';

export const signUpschema = yup.object({
    name: yup.string().min(2).max(25).required("please enter your name"),
     email: yup.string().email().required("please enter your email"),
      password: yup.string().min(6).required("please enter your password"),
       confirm_password: yup.string().required().
       oneOf([yup.ref('password'),null] ,"password must match"),
})