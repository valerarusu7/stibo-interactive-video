import Image from "next/image";
import { motion } from "framer-motion";
import CompanyComponent from "./CompanyComponent";

function Companies({ onClick }) {
  return (
    <div className="relative flex flex-col justify-center items-center h-full">
      <div className="h-full w-full grid grid-cols-2 grid-rows-3 gap-4 p-4">
        <div className="col-span-1">
          <CompanyComponent
            source={require("../assets/images/stibodx_logo.png")}
            text="Stibo DX is a company of technology professionals committed to
                the continued development, delivery and support of Stibo DX’s
                core editorial platform, CUE. The company headquarters is
                located in Aarhus, Denmark with an office located in Kennesaw,
                Georgia to serve the U.S., Canada and South America."
          />
          <CompanyComponent
            source={require("../assets/images/stibofoundation_logo.png")}
            text="Can print really be innovative? Absolutely! Not only do we run the biggest printing plants in Northern Europe, we are also
                passionate about making them better, faster and more environmentally friendly."
            additionalClasses="mt-4"
          />
          <CompanyComponent
            source={require("../assets/images/stibosystems_logo.svg")}
            text="Can print really be innovative? Absolutely! Not only do we run the biggest printing plants in Northern Europe, we are also
                passionate about making them better, faster and more environmentally friendly."
            additionalClasses="mt-4"
          />
        </div>
        <div className="col-span-1">
          <CompanyComponent
            source={require("../assets/images/stibocomplete_logo.png")}
            text="Can print really be innovative? Absolutely! Not only do we run the biggest printing plants in Northern Europe, we are also
                passionate about making them better, faster and more environmentally friendly."
          />
          <CompanyComponent
            source={require("../assets/images/stiboaccelerator_logo.png")}
            text="With the Stibo Accelerator initiative we have created a space to dream, discuss, prototype, test, fail, iterate, try again
                and learn. The Stibo Accelerator is first and foremost a Corporate Social Responsibility (CSR) initiative launched to give
                inspiration and value back to the academic institutions supplying us with the best-qualified future employees and to the
                industries in which our divisions operate."
            additionalClasses="mt-4"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Companies;
