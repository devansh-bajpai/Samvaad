"use client"
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';

type Inputs = {
  email: string,
  password: string,
};

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user: user, loading: userLoading } = useAuth();

  const { register, handleSubmit, setError, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.replace('/home');
    }
    catch {
      setLoading(false);
      setError("password", {
        type: "manual",
        message: "There was an error logging in."
      })
      // console.log(err);
      return;
    }
    finally {
      setLoading(false);
    }

  }

  useEffect(() => {
   if(!userLoading && user){
    router.replace('/home');
   }
  }, [user, router, userLoading])

  return (
    <>

      <form className='flex flex-col justify-center items-center w-full' onSubmit={handleSubmit(onSubmit)}>

        <h2 className='text-3xl mb-5'>Login</h2>

        <input type='email' placeholder='Email'
          className='input m-2 focus:outline-none'
          {...register("email", {
            required: "An email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format" }
          })}
        />

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




        <input type='password' placeholder='Password' className='input m-2 focus:outline-none' {...register("password", {
          required: "Password is required", minLength:
            { value: 8, message: "Password must be atleast 8 characters long." }
        })} />


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


        <input className={`btn btn-primary mt-4 hover:scale-105 transition duration-500 ${loading ? "hidden" : ""} ${userLoading ? "hidden" : ""} `} type="submit" />

        <span className={`loading loading-spinner loading-md mt-4 ${loading ? "" : "hidden"}`}></span>
        <span className={`loading loading-spinner loading-md mt-4 ${userLoading ? "" : "hidden"}`}></span>

      </form>


    </>
  )
}
