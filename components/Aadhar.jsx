import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import { useState } from "react"
import { db } from "../firebase"
import Image from "next/image"
const Aadhar = () => {
  const router = useRouter()
  const [aadhar, setAadhar] = useState("")
  const [infos, setInfos] = useState([])

  const collectionRef = collection(db, "aadhars")
  const handleClick = async (e) => {
    e.preventDefault()

    const data = await getDocs(collectionRef)
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))

    console.log(filterData)
    let aadharId
    let flag = false
    let isFlag = false

    filterData.forEach((item) => {
      if (item.aadharNumber === aadhar && item.isVerified) {
        router.push("confirm")
      } else if (item.aadharNumber == aadhar && item.isVerified == false) {
        aadharId = item.id
        flag = true
      } else {
        isFlag = true
      }
    })

    if (flag === true) {
      await setDoc(doc(collectionRef, aadharId), {
        aadharNumber: aadhar,
        isVerified: true,
      })
      router.push("authentication")
    } else if (isFlag) {
      router.push("notvalid")
    }

    console.log(infos)

    setAadhar("")
  }
  return (
    <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-evenly w-full">
      <Image
        width={150}
        height={150}
        alt="aadharLogo"
        src="/Aadhar-Color.svg"
        className="sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
      />

      <div>
        <h1 className="text-4xl text-secondary text-center font-medium">
          Aadhar Verification
        </h1>
        <form className="mt-5 space-y-5  flex flex-col items-center">
          <div className="flex flex-col space-y-3  justify-center">
            <label htmlFor="number">Enter a Aadhar number</label>
            <input
              type="text"
              required="true"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              placeholder="* * * * * * * *"
              id="number"
              className="bg-transparent border border-secondary text-secondary rounded-lg w-[200px] p-2 focus:outline-none sm:w-[350px] sm:p-4 md:w-[500px] md:p-5"
            />
          </div>
          <button
            onClick={(e) => handleClick(e)}
            className="mx-auto px-4 py-2 bg-secondary text-primary rounded-lg hover:bg-rear hover:scale-105 transition sm:px-8 sm:py-4"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  )
}

export default Aadhar
