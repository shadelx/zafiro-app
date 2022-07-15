import React from 'react'
import { FaAccusoft, FaDog } from 'react-icons/fa'
import Link from 'next/link'

function Hero() {
  return (
    <section className="bg-violet-50	 bg-transparent rounded-lg dark:bg-gray-900 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Zafiro the best vet managament platform</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptates rem consectetur maiores quisquam aspernatur.</p>
            <Link href="/signup">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-violet-400 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Sign up</a>

            </Link>
            
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src='https://static.wixstatic.com/media/0d1189_66ed96cd0bff45f9892d1a1dab08ce09~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/undraw_Dog_walking_re_l61p_edited.jpg' alt="hero image" className='rounded-lg'/>
          </div>                
        </div>
      </section>
  )
}

export default Hero