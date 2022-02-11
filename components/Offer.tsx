import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { IData } from '../features/interfaces/Interfaces'

interface OfferPropsType {
  data: IData[]
}

const Offer: React.FC<OfferPropsType> = ({ data }) => {
  return (
    <>
      <hr className="my-20 mx-auto max-w-lg border-yellow-500" id="offer" />
      <h2 className=" mt-10 pt-20 text-center text-3xl md:pt-32">Zabiegi</h2>

      <div className="mx-5 mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {data.map((service) => (
          <div
            key={service._id}
            className="image-full card  transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <figure>
              <img
                className=" max-h-56 object-cover"
                src={urlFor(service.image).url()!}
              />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title">{service.name}</h2>
              <p>{service.description}</p>
              <div className="card-actions ">
                <Link href={`/zabieg/${service.slug.current}`}>
                  <button className="btn bg-green-900 shadow-lg">Więcej</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Offer
