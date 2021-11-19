import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

function ShareButtons() {
  return (
    <div className="relative p-3">
      <div className="p-1 flex flex-col justify-start items-end">
        <div className="flex justify-center items-center cursor-pointer">
          <FaLinkedin className="h-8 w-8 text-gray-300 hover:text-blue-400 transition transform duration-500" />
        </div>
        <div className="flex justify-center items-center cursor-pointer mt-3">
          <FaFacebookSquare className="h-8 w-8 text-gray-300 hover:text-blue-500 transition transform duration-500" />
        </div>
        <div className="flex justify-center items-center cursor-pointer mt-3">
          <FaInstagram className="h-8 w-8 text-gray-300 hover:text-red-500 transition transform duration-500" />
        </div>
      </div>
    </div>
  );
}

export default ShareButtons;
