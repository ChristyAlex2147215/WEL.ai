import React from 'react'
import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';


export default function EventRegister() {

        const [value, setValue] = useState('')
        const { listen,stop } = useSpeechRecognition({
          onResult: (result) => {
            setValue(result)
          }
        })
    
  return (
    <>
      <section class="h-screen bg-cover bg-[url('/public/bg_img1.avif')]" >
      <div class="flex h-full w-full items-center justify-center container mx-auto px-8">
      <div>
       <textarea
         value={value}
         onChange={(event) => setValue(event.target.value)}
        />
        <button onMouseDown={listen}>
          🎤 Click me to Record
        </button>
        <button onMouseDown={stop}>
          Stop Recording
        </button>
       </div>
      <div class="max-w-2xl text-center">
      <h1 class="text-3xl sm:text-5xl tracking-widest text-white lg:text-7xl">Wel.ai</h1>
      <button class="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2" type='submit'>Register and Event</button>

      <p class="mt-6 lg:text-lg text-white">Sending perfect Invitation to the right people.</p>

      <div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <input id="email" type="text" class="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Email Address" />
        {/* <button class="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Notify Me</button> */}
      </div>
    </div>
  </div>
</section>
    </>
  )
}