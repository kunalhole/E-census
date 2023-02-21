import Link from "next/link"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false)

  const handleNav = () => {
    setSideNav(!sideNav)
  }
  return (
    <header className="sticky z-[100] top-0 w-full bg-secondary h-20">
      <div className="flex items-center w-full h-full px-10 justify-between">
        <Link href="/">
          <h1 className="text-[32px] font-semibold cursor-pointer text-rear">
            E-Ganana
          </h1>
        </Link>

        <div className="">
          <ul className="hidden md:flex space-x-4 p-5 text-primary text-md">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b">About</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b">contact</li>
            </Link>
            <Link href="/sitemap ">
              <li className="ml-10 uppercase hover:border-b">Statistics</li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer text-primary"
          >
            <MenuIcon className="h-7" />
          </div>
        </div>
      </div>
      <div
        className={
          sideNav
            ? "sm:hidden fixed left-0 top-0 w-full h-screen bg-black/20"
            : ""
        }
      >
        <div
          className={
            sideNav
              ? "sm:hidden fixed bg-secondary w-[60%] top-0 left-0 h-screen p-10 ease-in duration-500"
              : "sm:hidden left-[-100%] fixed top-0 p-10 ease-out duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between max-w-md min-w-fit">
              <h1 className="text-2xl font-semibold cursor-pointer text-rear">
                E-census
              </h1>
              <div className="rounded-full cursor-pointer text-primary">
                <XIcon onClick={handleNav} className="h-6" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <ul className="uppercase text-primary">
              <Link href="/about">
                <li className="py-4 text-sm  hover:border-b">About</li>
              </Link>
              <Link href="/contact">
                <li className="py-4 text-sm hover:border-b">contact</li>
              </Link>
              <Link href="/sitemap ">
                <li className="py-4 text-sm  hover:border-b">Statistics</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
