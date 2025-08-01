import React from 'react'
import TypingText from './TypingText'
import Image from 'next/image'
import GetStartedButton from './GetStartedButton'
import LandingPageFooter from './LandingPageFooter'


export default function HeroSection() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/samvaad_background_2.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md flex flex-col items-center">
            <Image
              src="/samvaad_logo_transparent.png"
              alt="Logo"
              width={100}
              height={100}
              className="rounded hover:scale-105 transition duration-500"
            />

            <TypingText />
            <p className="mb-5 select-none">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>
      <LandingPageFooter />
    </>
  )
}
