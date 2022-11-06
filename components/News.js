function News() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-9 py-16'>
        <div>
          <img
            src='https://images.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/07/20/fb_img_1657106873224.jpg'
            alt=''
            className='w-full h-auto'
          />
        </div>
        <div className='space-y-6 p-4 mt-4 sm:mt-0'>
          <p className='text-4xl font-semibold'>
            Fahad Hossain and the story behind Amader School
          </p>
          <p className='text-xl text-gray-700'>
            The world today is said to be at the fingertips of the young and the
            progressive, cheers to the digitalisation of everything from the
            education sector to health. And Bangladesh is no less behind. With
            digital entrepreneurs making every stride of the deshi citizen
            easier and more accommodating, life has become fast-paced and
            up-to-the-mark to our global neighbours ...
          </p>
          <button className='text-lg px-4 py-2.5 text-white bg-[#b82d24] font-bold hover:bg-white border-4 border-[#b82d24] transition-all duration-150 hover:text-[#b82d24]'>
            <a
              href='https://www.thedailystar.net/life-living/news/fahad-hossain-and-the-story-behind-amader-school-3074971'
              target='_blank'
              rel='noreferrer'
            >
              Read The Article
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default News
