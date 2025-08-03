"use client"
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebase';
import { FixedSizeList as List } from 'react-window';


// const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

type Inputs = {
    username: string,
};

type User = {
    id: string;
    username: string;
    email?: string;
    uid: string;
};


export default function UserSearch() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<User[]>([]);


    const { register, handleSubmit, setError, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);
        const username = data.username;
        if (!username.trim()) return;

        const q = query(
            collection(db, "users"),
            where("username", ">=", username),
            where("username", "<=", username + "\uf8ff")
        );

        const querySnapshot = await getDocs(q);
        const users: User[] = [];
        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() } as User);
        });
        setResults(users);
        setLoading(false);

    }

    useEffect(() => {
        console.log(results);
    }, [results])

    return (

        <>
            <div className='flex flex-col'>
                <form className='flex items-center w-full' onSubmit={handleSubmit(onSubmit)}>


                    <input placeholder='Search Username'
                        className='input m-2 focus:outline-none'
                        {...register("username", {
                            required: true
                        })}
                    />

                    <input className={`btn btn-primary hover:scale-105 transition duration-500 ${loading ? "hidden" : ""}`} type="submit" />
                    <span className={`loading loading-spinner loading-md ml-2 ${loading ? "" : "hidden"}`}></span>


                </form>

                        {results.length !=0 && (
<ul className="list bg-base-100 rounded-box shadow-md">
                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Suggestions</li>
                    <List
                        height={400}        // total height of list container
                        itemCount={results.length}
                        itemSize={60}       // height of each row
                        width={'100%'}      // or a fixed value like 300
                    >


                        {({ index, style }) => (
                            <div style={style} className="border-b p-2 flex items-center">
                                <div>
                                    <div>{results[index].username}</div>
                                </div>
                            </div>
                        )}




                    </List>


                    <li className="list-row">

                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                        <div>
                            <div>Dio Lupa</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                    </li>


                </ul>
                        )}


            </div>

                        <div className='w-full h-[100] bg-red-500'>
                            uaegjgbhkiahebfvgeakjh
                        </div>









        </>


    )
}
