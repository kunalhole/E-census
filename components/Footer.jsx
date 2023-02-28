// import Image from "next/image"

// const Footer = () => {
//   return (
//     <div className="w-full bg-secondary  bottom-0 sticky text-primary font-normal text-sm flex justify-around items-center h-[100px] z-10 rounded-t-md ">
//       <p className="">@Copyright- Some Information</p>
//       <div className="flex items-center flex-col  space-y-2">
//         <p className="text-xl font-semibold text-rear">Contact</p>
//         <div className="flex space-x-5">
//           <div>
//             <Image
//               src="/instagram.svg"
//               className="color hover:scale-105 cursor-pointer"
//               width={25}
//               height={25}
//               alt="instagram"
//               object-fit="contain"
//             />
//           </div>
//           <Image
//             src="/github.svg"
//             className="image hover:scale-105 cursor-pointer"
//             width={25}
//             height={25}
//             alt="github"
//             object="contain"
//           />
//           <Image
//             src="/twitter.svg"
//             className="text-primary hover:text-rear hover:scale-105 cursor-pointer"
//             width={25}
//             height={25}
//             alt="twitter"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="sm:py-8 py-4 dark:bg-rakhadi/20 sm:space-y-0 space-y-2 sm:px-32 px-4 w-full flex sm:flex-row flex-col items-center justify-between h-max sm:h-32 backdrop-blur-3xl rounded-t-lg bg-secondary">
      {/* About Info */}
      <div className="w-max">
        <h3 className="font-semibold text-center dark:text-slate-300 drop-shadow-lg text-rear">
          Designed &amp; Developed By
        </h3>
        <h4 className="text-white font-bold dark:text-slate-400 text-[1.75rem] sm:text-3xl drop-shadow-lg text-center">
          Team
        </h4>
      </div>
      {/* Contact */}
      <div className="w-max h-max">
        <h3 className="sm:font-semibold font-semibold dark:text-slate-300 text-center drop-shadow-lg mb-1 text-rear">
          Contact
        </h3>
        {/* Social Icons */}
        <div className="-mb-4 sm:mb-0 space-x-5">
          <a
            href="https://twitter.com/kunalhole"
            target="_blank"
            title="Kunal's Twitter"
            className="inline-block"
            rel="noreferrer"
          >
            <Image
              src="/twitter.svg"
              className="cursor-pointer dark:opacity-[0.5]"
              width={35}
              height={35}
              alt="twitter"
            />
          </a>
          <a
            href="https://github.com/kunalhole"
            target="_blank"
            title="Kunal's Github"
            className="inline-block"
            rel="noreferrer"
          >
            <Image
              src="/github.svg"
              className="cursor-pointer dark:opacity-[0.5] text-primary"
              width={35}
              height={35}
              alt="github"
            />
          </a>
          <a
            href="https://instagram.com/_kunal_hole_"
            target="_blank"
            title="Kunal's Instagram"
            className="inline-block"
            rel="noreferrer"
          >
            <Image
              src="/instagram.svg"
              className="cursor-pointer dark:opacity-[0.5]"
              width={35}
              height={35}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
