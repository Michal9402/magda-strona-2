import React from 'react'
import { IData } from '../features/interfaces/Interfaces'

export default function Pricelist({ data }: IData) {
  return (
    <div className="w-full">
      <h1 className=" mt-20 text-center text-5xl font-bold">Cennik</h1>

      <table className=" mx-auto mt-10 w-3/4">
        <thead className="border-b-2 border-gray-400">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide">Zabieg</th>
            <th className="p-3 text-sm font-semibold tracking-wide">Cena</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product._id} className=" odd:bg-gray-300">
              <td className=" p-4 text-sm text-gray-700">{product.name}</td>
              <td className="p-4 text-center text-sm text-gray-700">
                {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
