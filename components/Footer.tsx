import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <div
      className=" footer footer-center mt-20 flex h-auto w-full justify-between space-x-2 bg-gray-800 py-14 px-4 text-white"
      id="contact"
    >
      <div className=" block w-5/6 items-start space-y-3 md:w-2/3 lg:w-1/3">
        <h1 className=" footer-title text-left text-lg">
          Piękno Od Ręki <br /> Magdalena Kobylińska
        </h1>

        <h2 className=" text-left text-lg">Kontakt</h2>
        <p className="text-left text-xl">
          Email: {''}
          <a href="mailto:magda@gmail.com" className=" hover:text-gray-300">
            pieknoodreki@gmail.com
          </a>
        </p>

        <p className="text-left text-xl">
          Tel: <a href="tel:+48789133421">+48 789 133 421</a>
        </p>
      </div>
      <div className="hidden w-1/3 lg:block">
        <h3 className="text-lg">
          Zapraszam do zapisów telefonicznych, mailowych lub przez konta
          społecznościowe
        </h3>
      </div>
      <div className="block w-1/6 p-5 align-bottom md:flex md:w-1/3">
        <a
          href="https://www.instagram.com/pieknoodreki_kosmetologia.pmu/"
          target="_blank"
          className="md:mx-auto"
        >
          <FaInstagram className="text-4xl" />
        </a>
        <a
          href="https://www.facebook.com/Pi%C4%99kno-od-r%C4%99ki-101757858988622"
          target="_blank"
        >
          <FaFacebook className="mt-10 text-4xl md:mt-0" />
        </a>
      </div>
    </div>
  )
}

export default Footer
