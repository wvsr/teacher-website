function Videos({ data }) {
  const VideoItem = ({ title, image, link }) => (
    <a
      href={`https://www.youtube.com/watch?v=${link}`}
      target='_blank'
      rel='noreferrer'
    >
      <div className='rounded-lg shadow-lg pt-4 pb-8 px-4 space-y-6 bg-zinc-100 border border-zinc-200'>
        <img src={image} className='rounded-lg w-full h-auto ' alt='' />
        <p className='text-lg'>
          {title.length > 50 ? title.slice(0, 60) + '...' : title}
        </p>
      </div>
    </a>
  )

  return (
    <div className='py-14 bg-slate-50'>
      <div className='flex justify-center text-center my-8 container mx-auto px-4'>
        <h1 class='sm:text-4xl text-2xl title-font mb-4 text-gray-900 max-w-xl font-semibold'>
          Recent Youtube Videos
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  container mx-auto max-w-6xl gap-4'>
        {data.items.map((props) => (
          <VideoItem
            key={props.id.videoId}
            title={props.snippet.title}
            image={props.snippet.thumbnails.medium.url}
            link={props.id.videoId}
          />
        ))}
      </div>
    </div>
  )
}

export default Videos
