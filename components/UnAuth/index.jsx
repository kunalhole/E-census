import Navbar from "../Navbar"
import Image from "next/image"
import Footer from "../Footer"
const UnAuth = ({ metaMask }) => {
  const connectWallet = async () => {
    await metaMask.request({
      method: "eth_requestAccounts",
    })
  }
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col flex-1 items-center">
        <div className="relative max-w-2xl h-max flex flex-col items-center justify-center space-y-10 p-5 mt-5">
          <h1 className="font-semibold text-[24px] sm:text-[32px] text-center">
            Connect using your{" "}
            <span className="italic text-rear">Metamask</span> Wallet!
          </h1>
          <div className="relative w-[300px] h-[250px] sm:w-[450px] sm:h-[400px]">
            <Image
              fill="true"
              className="object-contain"
              src="/unAuthImage.svg"
              alt="image"
            />
          </div>
          <button
            onClick={() => connectWallet()}
            className="bg-secondary  rounded-md text-primary font-medium text-base px-4 py-[12px] block mx-auto  text-[18px] hover:bg-rear  hover:scale-105 transition  active:bg-rear"
          >
            Connect Wallet
          </button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default UnAuth
