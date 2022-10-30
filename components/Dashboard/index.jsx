import Navbar from "../Navbar"

const Dashboard = ({ metaMask }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center bg-yellow-300">
        <h1>Page</h1>
      </div>
    </div>
  )
}

export default Dashboard
