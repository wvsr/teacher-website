import React from 'react'

function Hero() {
  return (
    <div className='h-auto hero'>
      <article className='grid grid-cols-1 md:grid-cols-2 md:h-screen w-full h-full'>
        <div className='flex justify-center flex-col md:h-screen'>
          <div className='px-8 text-black py-20 mt-36 md:mt-0 mx-8 md:mx-10 lg:mx-20 space-y-7 bg-[#ffffffe7]'>
            <h1 className='text-5xl font-bold'>Fahad Hossain</h1>
            <p className='text-2xl font-medium text-gray-600'>
              Behind the man of Amader school and Fahad Tutorial
            </p>
          </div>
        </div>
        <div className='md:overflow-hidden flex items-end h-full'>
          <img src='/fahad_sir.png' className='w-full h-full' alt='' />
        </div>
      </article>
    </div>
  )
}

export default Hero
