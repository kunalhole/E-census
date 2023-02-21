import Image from "next/image"
import Footer from "../Footer"
import Navbar from "../Navbar"

const NoMetamask = ({ metaMask }) => {
  console.log(metaMask)
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col flex-1 items-center">
        <div className="relative max-w-2xl h-max flex flex-col items-center justify-center space-y-10 p-5 mt-5">
          <h1 className="font-semibold text-[24px] sm:text-[32px] text-center">
            Ooops! You Don`&apos;`t have{" "}
            <span className="italic text-rear">Metamask</span> Wallet!
          </h1>
          <div className="relative w-[300px] h-[250px] sm:w-[450px] sm:h-[400px]">
            <Image
              fill="true"
              className="object-contain"
              src="/metaMaskFox.svg"
              alt="image"
            />
          </div>
          <a
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
            rel="noreferrer"
          >
            <button
              onClick={() => connectWallet()}
              className="bg-secondary  rounded-md text-primary font-medium text-base px-4 py-[12px] block mx-auto  text-[18px] hover:bg-rear  hover:scale-105 transition  active:bg-rear"
            >
              Download MetaMask
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default NoMetamask
