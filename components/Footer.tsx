import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <div
      className=" footer footer-center mt-20 flex h-auto w-full justify-between bg-gray-800 p-6 text-white"
      id="contact"
    >
      <div className="w-1/2">
        <h1 className=" footer-title">
          Piękno Od Ręki <br /> Magdalena Kobylińska
        </h1>

        <h2 className="">Kontakt</h2>
        <p>
          Email:{' '}
          <a href="mailto:magda@gmail.com" className=" hover:text-gray-300">
            magda@gmail.com
          </a>
        </p>

        <p>
          Tel: <a href="tel:+48555111222">+48 555 111 222</a>
        </p>
      </div>
      <div className="flex w-1/2 justify-around p-5">
        <a
          href="https://www.instagram.com/pieknoodreki_kosmetologia.pmu/"
          target="_blank"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/Pi%C4%99kno-od-r%C4%99ki-101757858988622"
          target="_blank"
        >
          <FaFacebook className="text-2xl" />
        </a>
      </div>
    </div>
  )
}
