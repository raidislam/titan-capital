"use client"
import React, { useState } from "react"
// import { arrow, createPopper } from "@popperjs/core";
import Link from "next/link"
import { MdKeyboardArrowDown } from "react-icons/md"
import { MdKeyboardArrowUp } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar({ color }) {
  // !========================
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }
  // bg colors
  let bgColor
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500")
  // !========================
  return (
    <nav className="bg-white border-gray-200 bg-opacity-10">
      <div className=" flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center" passHref>
          <div className="self-center whitespace-nowrap text-black">
            <img src="/titan_capital_logo.svg" alt="" className="" />
          </div>
        </Link>
        <div className="w-full md:block md:w-auto">
          <ul className="flex flex-col font-semibold p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/ourfirm"
                className="block py-2 px-4 pl-3 pr-4 text-black text-sm md:text-lg font-medium rounded md:bg-transparent md:p-0 md:dark:bg-transparent"
                aria-current="page"
              >
                Our Firm
              </Link>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-4 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-black text-lg font-medium"
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ? setDropdownPopoverShow(false)
                    : setDropdownPopoverShow(true)
                  // ? closeDropdownPopover()
                  // : openDropdownPopover();
                }}
              >
                <Link href="/what-we-do">What We Do</Link>

                {dropdownPopoverShow == true ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </button>

              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  (color === "white" ? "bg-white " : bgColor + " ") +
                  " absolute top-10 text-base z-50 float-left py-2 px-4 list-none text-left rounded shadow-lg mt-1 bg-black text-white"
                }
                // style={{ minWidth: "12rem" }}
                style={{
                  minWidth: "20rem",
                  transform: "translate(0, 0)",
                }}
              >
                <Link
                  href="/services/overview"
                  className={
                    " py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
                    (color === "white" ? " text-slate-700" : "text-white")
                  }
                >
                  M&A and Private Equity Support
                </Link>
                <Link
                  href="/services/incorporationSecretarial"
                  className={
                    " py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
                    (color === "white" ? " text-slate-700" : "text-white")
                  }
                >
                  Fundraising
                </Link>
                <Link
                  href="/services/accountingGSTTaxFiling"
                  className={
                    " py-2 px-4 font-normal block whitespace-nowrap bg-transparent hover:text-[#2639ED]" +
                    (color === "white" ? " text-slate-700" : "text-white")
                  }
                >
                  Direct Investing
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/media"
                className="block py-2 px-4 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:p-0 text-black text-lg font-medium dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
    </nav>
  )
}
