import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

import Image from "next/image";
import { useSelector } from "react-redux";

function ShareButtons() {
  const { answers } = useSelector((state) => state.interview);
  return (
    <div className="z-50 relative p-3 ">
      <div className="p-1 flex justify-between items-start">
        <div className="h-32">
          {answers.length > 0 && answers.length < 13 ? (
            <Image
              src={require("../assets/images/stiboaccelerator_logo.png")}
            />
          ) : null}
        </div>
        <div>
          <div className="flex justify-center items-center cursor-pointer">
            <FaLinkedin className="w-10 h-10 text-gray-700 hover:opacity-70 transition transform duration-300" />
          </div>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=example.org"
            target="_blank"
            className="flex justify-center items-center cursor-pointer mt-3"
          >
            <FaFacebookSquare className="w-10 h-10 text-gray-700 hover:opacity-70 transition transform duration-300" />
          </a>
          <div className="flex justify-center items-center cursor-pointer mt-3">
            <FaInstagram className="w-10 h-10 text-gray-700 hover:opacity-70 transition transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareButtons;
