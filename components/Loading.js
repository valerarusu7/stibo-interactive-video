import { useEffect, useState } from "react";

function Loading({ download }) {
  const [loadingText, setLoadingText] = useState(
    "Did you know Stibo was founded in 1794?"
  );

  useEffect(() => {
    if (download >= 25 && download <= 50) {
      setLoadingText("The accelerator is initializing...");
    }
    if (download >= 50 && download < 75) {
      setLoadingText("Loading the assets...");
    }
    if (download >= 75) {
      setLoadingText("Preparing the MeetUp...");
    }
  }, [download]);

  return (
    <div
      className={`${
        download !== 100 ? "visible" : "hidden"
      } absolute w-full h-full overflow-hidden flex flex-col justify-center items-center`}
    >
      <p className="text-8xl font-bold">{`${download}%`}</p>
      <div className="h-8 w-1/2 relative max-w-xl rounded-full overflow-hidden mt-2">
        <div className="w-full h-full bg-gray-200 absolute border-4"></div>
        <div
          id="bar"
          className="transition-all ease-out duration-1000 h-full bg-[#241f21] relative w-0"
          style={{ width: `${download}%` }}
        ></div>
      </div>
      <div className="mt-2">
        <p className="text-xl font-semibold text-[#241f21]">{loadingText}</p>
      </div>
    </div>
  );
}

export default Loading;
