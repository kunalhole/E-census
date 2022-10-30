import Navbar from "../Navbar"
import Image from "next/image"
const UnAuth = ({ metaMask }) => {
  const connectWallet = async () => {
    await metaMask.request({
      method: "eth_requestAccounts",
    })
  }
  return (
    <>
      <Navbar />
      <div className="w-full absolute h-screen flex justify-center items-center bg-primary">
        <div className="relative max-w-2xl h-[50%] flex flex-col items-center justify-center space-y-6 p-5 mt-5">
          <h1 className="font-semibold text-[24px] sm:text-[32px] text-center">
            Connect using your{" "}
            <span className="italic text-rear">Metamask</span> Wallet!
          </h1>
          {/* <div className="relative w-[300px] h-[250px] sm:w-[450px] sm:h-[400px]"> */}
          <Image width={400} height={350} src="/unAuthImage.svg" alt="image" />
          {/* </div> */}
          <button
            onClick={() => connectWallet()}
            className="bg-secondary  rounded-md text-primary font-medium text-base px-4 py-[12px] block mx-auto  text-[18px] hover:bg-rear  hover:scale-105 transition  active:bg-rear"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  )
}

export default UnAuth
