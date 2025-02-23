import Image from "next/image";
import jamesLogo from "../../lib/image/jamesLogo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function PortfolioHeader() {
  return (
    <header className="flex items-center justify-between py-4 px-5 text-darkGrey">
      <div className="flex items-center gap-2">
        <Image 
          src={jamesLogo} 
          alt="logo" 
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
        />
      </div>
      <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-center flex-1">
        James Vincent Escartin
      </h1>
      <div className="flex items-center gap-4">
        <a href="https://github.com/j-escartin" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:text-gray-600"/>
        </a>
        <a href="https://www.linkedin.com/in/j-escartin/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:text-blue-600"/>
        </a>
      </div>
    </header>
  )
}