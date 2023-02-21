import Image from "next/image"
import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const HeroSection = () => {
  const router = useRouter()

  const handleChange = () => {
    router.push("/manager")
  }
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex space-x-6 flex-1 items-center justify-evenly">
        <Image
          src="/login.svg"
          alt="login"
          width={600}
          height={500}
          className="object-contain hidden md:inline-flex"
        />

        <div className="  flex flex-col p-5 items-center space-y-20 font-semibold text-[40px] shadow-md rounded-lg">
          <h1 className="text-secondary text-center font-bold">
            Let&apos;s <span className="italic text-rear">Census</span> it
            Effectively!
          </h1>

          <button
            onClick={handleChange}
            className="bg-secondary  rounded-md text-primary font-medium text-base px-4 py-[12px] block mx-auto  text-[18px] hover:bg-rear  hover:scale-105 transition  active:bg-rear"
          >
            Let&apos;s Connect
          </button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default HeroSection
