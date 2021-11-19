import Image from "next/image";
import { motion } from "framer-motion";

function Companies() {
  return (
    <div className="relative flex flex-col justify-center items-center h-full ">
      <div className=" h-full w-full">
        <div className="flex items-center w-full">
          <div className="group flex justify-center items-center p-4 ml-12">
            <Image src={require("../assets/images/stibodx_logo.png")} />
            <div className="ml-4 w-80 opacity-0 group-hover:opacity-100 transition transform duration-500">
              <p>
                Stibo DX is a company of technology professionals committed to
                the continued development, delivery and support of Stibo DX’s
                core editorial platform, CUE. The company headquarters is
                located in Aarhus, Denmark with an office located in Kennesaw,
                Georgia to serve the U.S., Canada and South America."
              </p>
            </div>
          </div>
          <div className="group flex justify-center items-center p-4 ml-12">
            <div className="ml-4 w-80 opacity-0 group-hover:opacity-100 transition transform duration-500">
              <p>
                Can print really be innovative? Absolutely! Not only do we run
                the biggest printing plants in Northern Europe, we are also
                passionate about making them better, faster and more
                environmentally friendly.
              </p>
            </div>

            <Image src={require("../assets/images/stibocomplete_logo.png")} />
          </div>
        </div>

        <div className="group flex items-center justify-center cursor-pointer">
          <div
            className="animate-pulse cursor-pointer"
            whileHover={{ scale: 1.05, cursor: "pointer" }}
          >
            <Image
              src={require("../assets/images/stiboaccelerator_logo.png")}
            />
          </div>
          <div className="ml-4 w-96 opacity-0 group-hover:opacity-100 transition transform duration-500">
            <p>
              With the Stibo Accelerator initiative we have created a space to
              dream, discuss, prototype, test, fail, iterate, try again and
              learn. The Stibo Accelerator is first and foremost a Corporate
              Social Responsibility (CSR) initiative launched to give
              inspiration and value back to the academic institutions supplying
              us with the best-qualified future employees and to the industries
              in which our divisions operate.
            </p>
          </div>
        </div>

        <div className="flex items-center w-full ">
          <div className="group flex justify-center items-center p-4">
            <Image src={require("../assets/images/stibofoundation_logo.png")} />
            <div className="ml-4 w-80 opacity-0 group-hover:opacity-100 transition transform duration-500">
              <p>
                Can print really be innovative? Absolutely! Not only do we run
                the biggest printing plants in Northern Europe, we are also
                passionate about making them better, faster and more
                environmentally friendly.
              </p>
            </div>
          </div>
          <div className="group flex justify-center items-center mt-24">
            <div className="ml-4 w-80 opacity-0 group-hover:opacity-100 transition transform duration-500">
              <p>
                Can print really be innovative? Absolutely! Not only do we run
                the biggest printing plants in Northern Europe, we are also
                passionate about making them better, faster and more
                environmentally friendly.
              </p>
            </div>

            <Image src={require("../assets/images/stibosystems_logo.svg")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
