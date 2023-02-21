import Navbar from "../components/Navbar"
import Image from "next/image"
import { useRouter } from "next/router"
import Footer from "../components/Footer"
const Greeting = () => {
  const router = useRouter()
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />

      <div className="flex flex-1 flex-col items-center justify-center space-y-8 sm:flex-row sm:justify-evenly">
        <Image
          width={400}
          height={400}
          alt="image"
          src="/completing.svg"
          className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]"
        />
        <div className="flex flex-col space-y-7 items-center justify-center ">
          <h1 className="text-4xl font-bold text-secondary animate-pulse sm:text-5xl md:text-6xl">
            🙏 Thank You 🙏
          </h1>
          <p className="text-secondary text-2xl font-medium sm:3xl md:4xl">
            Your <span className="text-rear italic">response</span>
            <span></span> is recorded
          </p>
          <button
            className="bg-secondary  rounded-md text-primary font-medium text-base px-4 py-[12px] block mx-auto  text-[18px] hover:bg-rear  hover:scale-105 transition  active:bg-rear"
            formTarget="_blank"
            onClick={() => router.push("authentication")}
          >
            Go Home
          </button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Greeting
