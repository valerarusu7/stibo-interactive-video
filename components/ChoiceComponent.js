import { useEffect, useRef } from "react";

function ChoiceComponent({ onClick1, onClick2, src, choice1, choice2, muted }) {
  const video = useRef();

  useEffect(() => {
    video.current.load();
  }, [src]);
  return (
    <div className=" flex justify-center items-end h-screen transition transform duration-300">
      <video ref={video} src={src} muted={muted} loop autoPlay className="w-full m-8"></video>
      <div className="absolute grid grid-cols-2 gap-0 items-end w-full h-48">
        <div
          className="h-full flex justify-center items-center bg-black opacity-70 hover:bg-white 
          hover:opacity-60 hover:text-black text-white text-4xl cursor-pointer border-white border-2 transition transform duration-300"
          onClick={onClick1}
        >
          {choice1}
        </div>
        <div
          className="h-full flex justify-center items-center bg-black opacity-70 hover:bg-white 
          hover:opacity-60 hover:text-black text-white text-4xl cursor-pointer border-white border-2 transition transform duration-300"
          onClick={onClick2}
        >
          {choice2}
        </div>
      </div>
    </div>
  );
}

export default ChoiceComponent;
