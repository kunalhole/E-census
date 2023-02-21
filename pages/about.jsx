import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const about = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full min-h-full flex flex-col flex-1 items-center justify-center">
        <h1>About Page</h1>
      </main>
      <Footer />
    </div>
  )
}

export default about
