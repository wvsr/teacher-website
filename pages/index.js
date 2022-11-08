import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import News from '../components/News'
import Showcase from '../components/Showcase'
import Videos from '../components/Videos'
import Head from 'next/head'

function index(props) {
  console.log(props.data)
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <Hero />
      <Showcase {...props.data[0].items[0].statistics} />
      <News />
      <Videos data={props.data[1]} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const channelId = 'UC89PsEw-lR-76Q27ZyY-msQ'
  const minute_ = new Date().getMinutes()
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b7541e002fmshbedac2ddfd35148p117413jsn5d8184d91572',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  }

  const reqDetails = await fetch(
    `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channelId}&timeblank=${minute_}`,
    options
  )
  const resDetails = await reqDetails.json()

  const reqVideos = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50&timeblank=${minute_}`,
    options
  )
  const resVideos = await reqVideos.json()
  console.log(resVideos, resDetails)

  return {
    props: {
      data: [resDetails, resVideos],
    },
    revalidate: 600,
  }
}

export default index
