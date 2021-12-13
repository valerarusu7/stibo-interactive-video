import Image from "next/image";

function CompanyComponent({ source, text, additionalClasses, onClick }) {
  return (
    <div
      className={`row-span-1 w-full h-full flex flex-col justify-center items-center cursor-pointer group bg-black border border-black bg-opacity-60 rounded-md ${additionalClasses}`}
      onClick={onClick}
    >
      <div className="visible opacity-100 group-hover:hidden group-hover:opacity-0  transition transform duration-1000">
        <Image src={source} />
      </div>
      <div className="hidden opacity-0 group-hover:visible group-hover:opacity-100 transition transform duration-1000 text-black group-hover:text-lg group-hover:p-8 ">
        <p>{text} </p>
      </div>
    </div>
  );
}

export default CompanyComponent;
