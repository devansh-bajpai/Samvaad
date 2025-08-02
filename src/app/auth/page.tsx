import React from 'react'
import LandingPageFooter from '../../../components/LandingPage/LandingPageFooter'
import LoginForm from '../../../components/AuthPage/LoginForm'
import Link from 'next/link'

export default function page() {
    return (
        <>

            <div className="hero min-h-screen" style={{ backgroundImage: "url(/samvaad_background_2.png)", }}>
                <div className="hero-overlay"></div>
                <div className='w-1/2 h-1/2 bg-white rounded-lg bg-opacity-5 flex flex-col items-center justify-center'>

                    <LoginForm />



                    <div className='flex mt-5'>
                        <h6 className='mr-2'>Don&apos;t have an Account?</h6>
                        <Link href="/auth/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </div>


                </div>



            </div>

            <LandingPageFooter />


        </>
    )
}
