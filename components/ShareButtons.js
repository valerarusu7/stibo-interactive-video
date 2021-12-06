import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

function ShareButtons() {
  return (
    <div className="relative p-3">
      <div className="p-1 flex flex-col justify-start items-end">
        <div className="flex justify-center items-center cursor-pointer">
          <FaLinkedin className="w-10 h-10 text-blue-400 hover:opacity-80 transition transform duration-500" />
        </div>
        <div className="flex justify-center items-center cursor-pointer mt-3">
          <FaFacebookSquare className="w-10 h-10 text-blue-500 hover:opacity-80 transition transform duration-500" />
        </div>
        <div className="flex justify-center items-center cursor-pointer mt-3">
          <FaInstagram className="w-10 h-10 text-red-500 hover:opacity-80 transition transform duration-500" />
        </div>
      </div>
    </div>
  );
}

export default ShareButtons;
