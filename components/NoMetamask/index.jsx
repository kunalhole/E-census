import Navbar from "../Navbar"

const NoMetamask = ({ metaMask }) => {
  console.log(metaMask)
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center bg-yellow-200">
        <h1>NoMetamask Page</h1>
      </div>
    </div>
  )
}

export default NoMetamask
