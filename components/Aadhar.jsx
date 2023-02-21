import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import { useState } from "react"
import { db } from "../firebase"
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

    filterData.forEach((item) => {
      if (item.aadharNumber == aadhar && item.isVerified) {
        router.push("confirm")
      } else if (item.aadharNumber == aadhar && item.isVerified == false) {
        aadharId = item.id
        flag = true
      }
    })

    if (flag) {
      await setDoc(doc(collectionRef, aadharId), {
        aadharNumber: aadhar,
        isVerified: true,
      })
      router.push("authentication")
    } else {
      router.push("notvalid")
    }

    console.log(infos)

    setAadhar("")
  }
  return (
    <div className="flex flex-col">
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
            className="bg-transparent border border-secondary text-secondary rounded-lg min-w-[500px] p-5 focus:outline-none"
          />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          className="mx-auto px-8 py-4 bg-secondary text-primary rounded-lg hover:bg-rear hover:scale-105 transition"
        >
          Verify
        </button>
      </form>
    </div>
  )
}

export default Aadhar
