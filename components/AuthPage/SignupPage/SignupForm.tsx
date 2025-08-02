"use client"
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../hooks/useAuth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { query, where, collection, getDocs } from "firebase/firestore";

type Inputs = {
    email: string,
    password: string,
    confirmPassword: string,
    username: string
};

export default function SignupForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { user: user, loading: userLoading } = useAuth();

    const { register, handleSubmit, setError, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);

        const q = query(collection(db, "users"), where("username", "==", data.username));
        const snapshot = await getDocs(q);
        const isUsernameAvailable = snapshot.empty;
        if(!isUsernameAvailable){
            setLoading(false);
            setError("confirmPassword", {
                type: "manual",
                message: "Username is taken"
            })
            return;
        }

        if (data.password != data.confirmPassword) {
            setLoading(false);
            setError("confirmPassword", {
                type: "manual",
                message: "Passwords do not match."
            })
            return;
        }
        try {
            const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const uid = userCred.user.uid;

            await setDoc(doc(db, "users", uid), {
                email: data.email,
                username: data.username,
                uid: uid
            })

            router.replace("/home")
        }
        catch {
            setLoading(false);
            setError("confirmPassword", {
                type: "manual",
                message: "There was an error signing up"
            })
            return;

        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!userLoading && user) {
            router.replace('/home');
        }
    }, [user, router, userLoading])

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





                <input placeholder='Username' className='input m-2 focus:outline-none' {...register("username", {
                    required: "Username is required", minLength:
                        { value: 5, message: "Username must be atleast 5 characters long." }
                })} />

                <AnimatePresence mode="wait">
                    {errors.username && (
                        <motion.p
                            key="confirm-password-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="text-red-500 text-sm select-none"
                        >
                            {errors.username?.message}
                        </motion.p>
                    )}
                </AnimatePresence>




                <input type='password' placeholder='Password' className='input m-2 focus:outline-none' {...register("password", {
                    required: "Password is required", minLength:
                        { value: 8, message: "Password must be atleast 8 characters long." }
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




                <input type='password' placeholder='Confirm Password' className='input m-2 focus:outline-none' {...register("confirmPassword", {
                    required: "Password is required", minLength:
                        { value: 8, message: "Password must be atleast 8 characters long." }
                })} />
                {/* {errors.password && <span className='text-red-500'>{errors.password?.message}</span>} */}

                <AnimatePresence mode="wait">
                    {errors.confirmPassword && (
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




                <input className={`btn btn-primary mt-4 hover:scale-105 transition duration-500 ${loading ? "hidden" : ""} ${userLoading ? "hidden" : ""}`} type="submit" />
                <span className={`loading loading-spinner loading-md mt-4 ${loading ? "" : "hidden"}`}></span>

                <span className={`loading loading-spinner loading-md mt-4 ${userLoading ? "" : "hidden"}`}></span>
            </form>


        </>
    )
}
 