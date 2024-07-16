import React from "react"
import Navbar from "../navbar/Navbar"
import ResponsiveContainer from "../responsiveContainer/ResponsiveContainer"
import Link from "next/link"

export default function Footer() {
  return (
    <div classNameName=" bg-[#1d1d1d]">
      <div
        className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1 py-10"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              href="/ourfirm"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              Our Firm
            </Link>
          </li>
          <li>
            <Link
              href="/what-we-do"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              href="/media"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-4 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-black text-lg font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
