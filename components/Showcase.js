import { FaYoutube, FaEye } from 'react-icons/fa'
import { MdVideoLibrary } from 'react-icons/md'
// import CountUp from 'react-countup'
function Showcase(props) {
  return (
    <section class='text-gray-600 body-font bg-neutral-50'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-col text-center w-full mb-20 items-center'>
          <h1 class='sm:text-4xl text-2xl font-semibold mb-4 text-gray-900 max-w-xl'>
            Most Loved Bangladeshi Teacher On The Internet
          </h1>
        </div>
        <div class='flex flex-wrap justify-center -m-4 text-center'>
          <div class='p-4 md:w-1/3 sm:w-1/2 w-full '>
            <div class='border-2 border-gray-200 px-4 py-6 rounded-lg shadow-sm hover:shadow-md'>
              <p className='flex justify-center text-5xl mb-4'>
                <FaYoutube />
              </p>
              <h2 class='title-font font-medium text-3xl text-gray-900'>
                {props.subscriberCount}+
              </h2>
              <p class='leading-relaxed'>Subscriber</p>
            </div>
          </div>
          <div class='p-4 md:w-1/3 sm:w-1/2 w-full '>
            <div class='border-2 border-gray-200 px-4 py-6 rounded-lg shadow-sm hover:shadow-md'>
              <p className='flex justify-center text-5xl mb-4'>
                <MdVideoLibrary />
              </p>
              <h2 class='title-font font-medium text-3xl text-gray-900'>
                {props.videoCount}
              </h2>
              <p class='leading-relaxed'>Videos</p>
            </div>
          </div>
          <div class='p-4 md:w-1/3 sm:w-1/2 w-full '>
            <div class='border-2 border-gray-200 px-4 py-6 rounded-lg shadow-sm hover:shadow-md'>
              <p className='flex justify-center text-5xl mb-4'>
                <FaEye />
              </p>
              <h2 class='title-font font-medium text-3xl text-gray-900'>
                {props.viewCount}+
              </h2>
              <p class='leading-relaxed'>Views</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
