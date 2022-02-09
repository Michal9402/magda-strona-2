import React from 'react'
import { sanityClient, urlFor } from '../../sanity'
import { IZabieg } from '../../features/interfaces/Interfaces'
import { GetStaticProps } from 'next'
import PortableText from 'react-portable-text'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'
interface Props {
  zabieg: IZabieg
}

export default function Zabieg({ zabieg }: Props) {
  console.log(zabieg)
  return (
    <>
      <Head>
        <title>{zabieg.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className=" mt-20 bg-white p-3 text-black">
        <div className="mb-20 grid-cols-2 place-items-center md:grid">
          <img
            className=" mx-auto rounded-3xl shadow-lg md:max-h-[30rem]"
            src={urlFor(zabieg.image).url()!}
            alt=""
          />
          <PortableText
            className="mx-auto mt-10 max-w-6xl px-5 md:mt-0"
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            content={zabieg.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-5xl font-semibold" {...props} />
              ),
              h2: (props: any) => (
                <h2
                  className="my-3 text-xl font-semibold text-black"
                  {...props}
                />
              ),
              normal: (props: any) => (
                <p className="mb-2 tracking-wide" {...props} />
              ),
            }}
          />
        </div>

        <PortableText
          className="mx-auto max-w-6xl bg-gray-200 p-5 px-5 shadow-lg md:mt-0"
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
          content={zabieg.bodyLong}
          serializers={{
            h1: (props: any) => (
              <h1 className="my-5 text-5xl font-bold" {...props} />
            ),
            h2: (props: any) => (
              <h2 className="my-3 text-xl font-bold tracking-wide" {...props} />
            ),
            normal: (props: any) => (
              <p className="mb-2 leading-7 tracking-normal" {...props} />
            ),
          }}
        />

        <div className=" mt-20">
          <h1 className=" text-center text-2xl">Cennik - {zabieg.name}</h1>
          <table className=" mx-auto mt-10 w-3/4">
            <thead className="border-b-2 border-gray-400">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide">
                  Obszar
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide">
                  Cena
                </th>
                {zabieg.set === true ? (
                  <th className="p-3 text-sm font-semibold tracking-wide">
                    Cena pakietu (4 zabiegi)
                  </th>
                ) : (
                  ''
                )}
              </tr>
            </thead>
            <tbody>
              {zabieg.pricelist.map((z) => (
                <tr key={zabieg._id} className=" odd:bg-gray-300">
                  <td className=" p-4 text-sm text-gray-700">{z.name}</td>
                  <td className="p-4 text-center text-sm text-gray-700">
                    {z.price}
                  </td>
                  {z.priceForSet !== null ? (
                    <td className="p-4 text-center text-sm text-gray-700">
                      {z.priceForSet}
                    </td>
                  ) : (
                    <td className="p-4 text-center text-sm text-gray-700"></td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "zabieg"]{
        _id,
     slug
     }`

  const zabiegi = await sanityClient.fetch(query)

  const paths = zabiegi.map((zabieg: IZabieg) => ({
    params: {
      slug: zabieg.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const query = `*[_type == "zabieg" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    description,
    slug,
    set,
    'pricelist': pricelist[] -> {
    name,
    price,
    priceForSet
    },
    body,
    bodyLong,
    image
  }`

  const zabieg = await sanityClient.fetch(query, {
    slug: context.params?.slug,
  })

  if (!zabieg) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      zabieg,
    },
    revalidate: 60, //after 60 sec it ll update old cached version
  }
}
