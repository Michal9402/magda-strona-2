import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Transition } from '@headlessui/react'

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  const handleClick = () => {
    setDropdown(!dropdown)
  }
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 w-full bg-black bg-opacity-90 p-5 text-white">
      <div className="flex justify-between">
        <div className="flex items-center space-x-5">
          <Link href="/">Logo</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-5">
            <a className="btn btn-ghost" href="/#about">
              O mnie
            </a>
            <a className="btn" href="/#offer">
              Zabiegi
            </a>
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
          </ul>
        </nav>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className=" md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="grid grid-cols-2 space-y-1 px-2 pt-2 pb-3 sm:px-3"
            >
              <a
                href="/#about"
                className="flex items-center rounded-md px-3 py-2 font-medium text-white hover:bg-gray-700"
              >
                <span className="inline-block align-middle">O mnie</span>
              </a>
              <a
                href="https://www.instagram.com/pieknoodreki_kosmetologia.pmu/"
                target="_blank"
                className=" ml-auto flex w-1/2 rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <FaInstagram className="ml-auto text-3xl " />
              </a>

              <a
                href="/#offer"
                className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Zabiegi
              </a>

              <a
                href="https://www.facebook.com/Pi%C4%99kno-od-r%C4%99ki-101757858988622"
                target="_blank"
                className="ml-auto block w-1/2 rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <FaFacebook className="ml-auto text-3xl" />
              </a>
            </div>
          </div>
        )}
      </Transition>
    </div>
  )
}

// import Link from 'next/link'
// import React, { RefObject, useState } from 'react'
// import { FaFacebook, FaInstagram } from 'react-icons/fa'
// import { GiHamburgerMenu } from 'react-icons/gi'

// export default function Navbar() {
//   const [dropdown, setDropdown] = useState(false)
//   const handleClick = () => {
//     setDropdown(!dropdown)
//   }

//   return (
//     <div className=" sticky top-0 z-50 flex w-full justify-between bg-black p-5 text-white">
//       <div className="flex items-center space-x-5">
//         <Link href="/">Logo</Link>
//       </div>
//       <div className="dropdown-end dropdown align-middle sm:hidden">
//         <div tabIndex={0} className="">
//           <GiHamburgerMenu
//             className=" cursor-pointer text-2xl"
//             onClick={handleClick}
//           />
//         </div>
//         <ul
//           tabIndex={1}
//           className="dropdown-content menu rounded-box w-52 bg-green-700 p-2 shadow"
//         >
//           <li>
//             <Link href="/#about">O mnie</Link>
//           </li>
//           <li>
//             <Link href="/#offer">Zabiegi</Link>
//           </li>
//           <div className="flex justify-around">
//             <div className=" w-1/2 rounded p-2 hover:opacity-50">
//               <a
//                 href="https://www.instagram.com/pieknoodreki_kosmetologia.pmu/"
//                 target="_blank"
//               >
//                 <FaInstagram className="mx-auto text-3xl " />
//               </a>
//             </div>
//             <div className="w-1/2 rounded p-2 hover:opacity-50">
//               <a
//                 href="https://www.facebook.com/Pi%C4%99kno-od-r%C4%99ki-101757858988622"
//                 target="_blank"
//               >
//                 <FaFacebook className="mx-auto text-3xl" />
//               </a>
//             </div>
//           </div>
//         </ul>
//       </div>
//       <nav className="hidden sm:block">
//         <ul className="flex items-center space-x-5">
//           <a className="btn btn-ghost" href="/#about">
//             O mnie
//           </a>
//           <a className="btn" href="/#offer">
//             Zabiegi
//           </a>
//           <a
//             href="https://www.instagram.com/pieknoodreki_kosmetologia.pmu/"
//             target="_blank"
//           >
//             <FaInstagram className="text-2xl" />
//           </a>
//           <a
//             href="https://www.facebook.com/Pi%C4%99kno-od-r%C4%99ki-101757858988622"
//             target="_blank"
//           >
//             <FaFacebook className="text-2xl" />
//           </a>
//         </ul>
//       </nav>
//     </div>
//   )
// }
