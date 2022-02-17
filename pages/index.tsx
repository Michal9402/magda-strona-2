import Head from 'next/head'
import { sanityClient } from '../sanity'
import About from '../components/About'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Offer from '../components/Offer'
import { IData } from '../features/interfaces/Interfaces'
import Footer from '../components/Footer'

interface HomeProps {
  data: IData[]
}
const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Piękno Od Ręki</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className=" bg-white text-black">
        <Navbar />
        <Header />
        <About />
        <Offer data={data} />
        <Footer />
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const query = `*[_type == "zabieg"] | order(_createdAt){
    _id,
_createdAt,
    name,
description,
slug,
image
  }`

  const data: IData = await sanityClient.fetch(query)

  return {
    props: {
      data,
    },
  }
}
