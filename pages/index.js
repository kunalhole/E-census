import Head from "next/head"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="bg-primary">
      <Head>
        <title>E-census</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}

      <Navbar />

      <HeroSection />
    </div>
  )
}
