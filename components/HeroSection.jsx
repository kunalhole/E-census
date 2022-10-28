import Image from "next/image"
import { useRouter } from "next/router"
const HeroSection = () => {
  const router = useRouter()

  const handleChange = () => {
    router.push("/manger")
  }
  return (
    <div className="w-full h-screen flex items-center ">
      <div className=" relative w-full h-max flex items-center justify-evenly">
        <Image
          src="/login.svg"
          alt="login"
          width={600}
          height={500}
          className="object-contain hidden md:inline-flex"
        />

        <div className="  flex flex-col p-5 items-center space-y-20 font-semibold text-[40px]">
          <h1 className="text-secondary text-center font-bold">
            Let&apos;s <span className="italic text-rear">Census</span> it
            Effectively!
          </h1>

          <button
            onClick={handleChange}
            className="bg-secondary p-3 rounded-md text-primary  sm:text-[32px] text-[20px] hover:bg-rear hover:text-secondary hover:scale-105 transition font-bold active:bg-rear"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
