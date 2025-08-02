"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

type Inputs = {
  email: string,
  password: string,
  confirmPassword: string,
};

export default function SignupForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("email"))

  return (
    <>
  
      <form className='flex flex-col justify-center items-center w-full' onSubmit={handleSubmit(onSubmit)}>

        <h2 className='text-3xl mb-5'>Sign Up</h2>
        
        <input type='email' placeholder='Email'
          className='input m-2 focus:outline-none'
          {...register("email", {
            required: "An email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format" }
          })}
          />

        {/* {errors.email && <span className='text-red-500 opacity-0 animate-fadeIn'>{errors.email?.message}</span>} */}

          <AnimatePresence mode="wait">
  {errors.email && (
    <motion.p
      key="email-error"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.3 }}
      className="text-red-500 text-sm select-none"
    >
      {errors.email.message}
    </motion.p>
  )}
</AnimatePresence>



        
        <input type='password' placeholder='Password' className='input m-2 focus:outline-none' {...register("password", { required: "Password is required", minLength: 
          {value: 8, message: "Password must be atleast 8 characters long."}
         })} />
        {/* {errors.password && <span className='text-red-500'>{errors.password?.message}</span>} */}

         <AnimatePresence mode="wait">
  {errors.password && (
    <motion.p
      key="password-error"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.3 }}
      className="text-red-500 text-sm select-none"
    >
      {errors.password?.message}
    </motion.p>
  )}
</AnimatePresence>




  <input type='password' placeholder='Confirm Password' className='input m-2 focus:outline-none' {...register("confirmPassword", { required: "Password is required", minLength: 
          {value: 8, message: "Password must be atleast 8 characters long."}
         })} />
        {/* {errors.password && <span className='text-red-500'>{errors.password?.message}</span>} */}

         <AnimatePresence mode="wait">
  {errors.password && (
    <motion.p
      key="confirm-password-error"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.3 }}
      className="text-red-500 text-sm select-none"
    >
      {errors.confirmPassword?.message}
    </motion.p>
  )}
</AnimatePresence>




        <input className='btn btn-primary mt-4 hover:scale-105 transition duration-500' type="submit" />
      </form>


    </>
  )
}
