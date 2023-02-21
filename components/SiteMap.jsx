// import { useState } from "react"
// import { Bar } from "react-chartjs-2"
// import { UserData } from "../data"
// import { Chart, registerables } from "chart.js"
// Chart.register(...registerables)

import { ArrowSmDownIcon, Ar } from "@heroicons/react/outline"
import Image from "next/image"
import { useRouter } from "next/router"

const Statistics = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center min-h-screen bg-primary no-scrollbar ">
      <h1 className="m-10 text-3xl font-medium text-secondary text-center">
        <span className="italic text-rear font-semibold">Visualization</span> of
        Information Based on Following Parameters
      </h1>
      <p>
        <ArrowSmDownIcon className="h-5 w-5 md:h-8 md:w-8 animate-bounce" />
      </p>
      <div className=" flex flex-col space-y-8 space-x-5 md:flex-row md:space-x-6 md:mt-10  text-secondary">
        <a
          href="https://public.tableau.com/app/profile/r.j2396/viz/shared/5WMSBP6K2"
          target="_blank"
          rel="noreferrer"
        >
          <div className="space-y-5 cursor-pointer flex flex-col items-center justify-center space-x-6 shadow-md p-3 rounded-full shadow-secondary/25  md:shadow-md md:rounded-lg">
            <h1 className="text-xl uppercase mb-2">StateWise-Population</h1>
            <Image
              src="/population.svg"
              width={200}
              height={200}
              alt="image"
              className="sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </a>
        <a href="https://public.tableau.com/app/profile/r.j2396/viz/shared/B77PJ42BG">
          <div
            className="space-y-5 cursor-pointer flex flex-col items-center justify-center space-x-6 shadow-md p-3 rounded-full shadow-secondary/25 md:shadow-md md:rounded-lg"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-xl uppercase mb-2">Literacy</h1>
            <Image
              src="/literacy.svg"
              width={200}
              height={200}
              alt="image"
              className="sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </a>

        <a href="https://public.tableau.com/app/profile/r.j2396/viz/shared/8SPH4PWZ7">
          <div
            className="space-y-5 cursor-pointer flex flex-col items-center justify-center space-x-6 shadow-md p-3 rounded-full shadow-secondary/25 md:shadow-md md:rounded-lg"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-xl uppercase mb-2">Male-Female</h1>
            <Image
              src="/male-female.svg"
              width={200}
              height={200}
              alt="image"
              className="sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </a>
        <a
          href="https://public.tableau.com/app/profile/r.j2396/viz/Status_M/Story3"
          target="_blank"
          rel="noreferrer"
        >
          <div className="space-y-5 cursor-pointer flex flex-col items-center justify-center space-x-6 shadow-md p-3 rounded-full shadow-secondary/25 md:shadow-md md:rounded-lg">
            <h1 className="text-xl uppercase mb-2">Married-UnMarried</h1>
            <Image
              src="/married.svg"
              width={200}
              height={200}
              alt="image"
              className="sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Statistics
