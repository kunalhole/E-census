;<div className="w-full mi">
  <form className="">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          First Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Karan"
          required="true"
        />
        {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Last Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Bhosale"
          required="true"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Aadhaar Number
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="text"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          datatype="adhaar-bumber"
          placeholder="************"
          required="true"
        />
        <p className="text-gray-600 text-xs italic">
          Enter correct Aadhaar number
        </p>
      </div>
    </div>
    {/* Birth Certificate Number */}
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Birth Certificate Number
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="text"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          datatype="adhaar-bumber"
          placeholder="************"
          required="false"
        />
        <p className="text-gray-600 text-xs italic">
          Enter correct Birth Certificate number
        </p>
      </div>
    </div>
    {/* Birth Certificate Number */}
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Age
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required="true"
        />
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          Gender
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>other</option>
          </select>
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div> */}
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-zip"
        >
          Mobile Number
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="1234567890"
          required="true"
        />
      </div>
    </div>
    <div className="flex">
      <button
        onClick={(e) => handleClick(e)}
        className="bg-secondary  rounded-md text-primary font-medium text-base px-5 py-3 block mx-auto  text-[18px] hover:bg-rear  hover:scale-105 transition  active:bg-rear space-y-5 sm:mt-10"
      >
        Submit
      </button>
    </div>
  </form>
</div>
