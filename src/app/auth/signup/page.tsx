import React from 'react'
import LandingPageFooter from '../../../../components/LandingPage/LandingPageFooter'
import Link from 'next/link'
import SignupForm from '../../../../components/AuthPage/SignupPage/SignupForm'

export default function page() {
  return (
    <>
    <div className="hero min-h-screen" style={{ backgroundImage: "url(/samvaad_background_2.png)", }}>
                <div className="hero-overlay"></div>
                <div className='w-1/2 h-3/5 bg-white rounded-lg bg-opacity-5 flex flex-col items-center justify-center'>

                    <SignupForm />



                    <div className='flex mt-5'>
                        <h6 className='mr-2'>Already have an Account?</h6>
                        <Link href="/auth" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </div>


                </div>



            </div>

            <LandingPageFooter />
    
    </>
  )
}
