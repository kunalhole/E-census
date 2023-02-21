import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import Footer from "../Footer"

import Navbar from "../Navbar"

const Dashboard = ({ metaMask }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [birth, setBirth] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [mobile, setMobile] = useState("")
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push("confirm")
  }
  return (
    <main className="flex flex-col w-full min-h-screen ">
      <Navbar />
      <div className="w-full flex overflow-y-auto flex-1 flex-col items-center justify-center p-5 space-y-5 mt-10 md:flex-row md:justify-around sm:p-5 sm:space-x-5">
        <section className=" flex flex-col items-center justify-center mt-5">
          <div className="  bg-secondary/70 text-primary  p-5 rounded-lg shadow-md shadow-secondary/25 space-y-8">
            <h1 className="text-[24px] text-center font-medium text-rear sm:text-3xl md:text-4xl">
              Instructions
            </h1>
            <ol className="space-y-3 text-[16px]">
              <li>
                1. Fill the First and LastName same as Mention on Aadhar Card.
              </li>

              <li>
                2. Aadhar Card number should of 8 numbers long and correct as
                mention on Aadhar Card.
              </li>
              <li>
                3. Birth Certificate number should of 8 numbers long and correct
                as mention on Birth Certificate.
              </li>
              <li>4. Mention Your Gender</li>
              <li>5. Mention Your Locality</li>
              <li>6. Before Submitting the Form Check the details once.</li>
            </ol>
          </div>
        </section>
        {/* form is here */}

        <section className=" w-full flex flex-col items-center justify-center text-secondary font-semibold  bg-secondary/50 p-3 rounded-lg shadow-md md:w-1/2">
          <form className=" space-y-3 sm:w-1/2 md:w-3/4 flex-wrap">
            <div className="flex w-full flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex flex-col">
                <label htmlFor="FirstName" className="label">
                  FirstName
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your first name.."
                  id="FirstName"
                  required="true"
                />
              </div>
              <div className="flex flex-col">
                <label className="label" htmlFor="lastName">
                  LastName
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your last name.."
                  id="lastName"
                  required="true"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="label" htmlFor="aadhaar">
                Aadhaar Number
              </label>
              <input
                className="input"
                type="text"
                placeholder="********"
                id="aadhaar"
                required="true"
              />
            </div>
            <div className="flex flex-col">
              <label className="label" htmlFor="birth">
                Birth Certificate Number
              </label>
              <input
                className="input"
                type="text"
                placeholder="********"
                id="birth"
                required="true"
              />
            </div>

            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex flex-col">
                <label className="label" htmlFor="birthdate">
                  Birth Date
                </label>
                <input className="input" type="date" id="birthdate" required />
              </div>
              <div className="flex flex-col">
                <label className="label" htmlFor="age">
                  Age
                </label>
                <input
                  className="input"
                  type="number"
                  placeholder="age"
                  id="age"
                  required="true"
                />
              </div>
              <div className="flex flex-col">
                <label className="label" htmlFor="gender">
                  Gender
                </label>
                <select id="gender" className="input" required>
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>FeMale</option>
                  <option>others</option>
                </select>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex flex-col">
                <label className="label" id="place">
                  Place Of Birth
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="place of birth..."
                  id="place"
                  required="true"
                />
              </div>
              <div className="flex flex-col">
                <label className="label" id="city">
                  City
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="city"
                  id="city"
                  required="true"
                />
              </div>
              <div className="flex flex-col">
                <label className="label" id="state">
                  State
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="state"
                  id="state"
                  required="true"
                />
              </div>
            </div>
            <div className="flex w-full flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex flex-col">
                <label className="label" htmlFor="speak">
                  Mother Tongue
                </label>
                <input
                  className="input"
                  type="text"
                  id="speak"
                  placeholder="marathi"
                  required="true"
                />
              </div>
              <div className="flex flex-col">
                <label className="label" htmlFor="status">
                  Status
                </label>
                <select id="status" className="input" required>
                  <option>Select Status</option>
                  <option>Married</option>
                  <option>UnMarried</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="label" htmlFor="literacy">
                  Literacy
                </label>
                <select id="literacy" className="input" required="true">
                  <option>Select literacy</option>
                  <option>Literate</option>
                  <option>Illiterate</option>
                </select>
              </div>
            </div>
            <button
              onClick={(e) => handleClick(e)}
              className="bg-secondary  rounded-md text-primary font-medium text-base px-4 py-[12px] block mx-auto  text-[18px] hover:bg-rear  hover:scale-105 transition  active:bg-rear mt-10"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default Dashboard
