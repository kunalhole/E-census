import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useRouter } from "next/router"

const NotValide = () => {
  const router = useRouter()
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="flex flex-1 items-center justify-center flex-col space-y-8">
        <h1 className="text-3xl text-secondary font-medium text-center animate-bounce">
          <span className="animate-bounce">🥲</span> Ooops Its Seem To Be You
          Entered Wrong Aadhar Number <span className="animate-bounce">🥲</span>
        </h1>
        <p className="text-xl font-sm text-secondary text-center">
          Please Enter a Valid{" "}
          <span className="text-rear italic">Aadhar Number</span>{" "}
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-secondary  rounded-md text-primary font-medium text-base px-4 py-[12px] block mx-auto  text-[18px] hover:bg-rear  hover:scale-105 transition"
        >
          Go Home
        </button>
      </div>
      <Footer />
    </main>
  )
}

export default NotValide
