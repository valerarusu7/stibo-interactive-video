function ChoiceComponent({ onClick1, onClick2, src, choice1, choice2, muted }) {
  return (
    <div className=" flex justify-center items-center h-full transition transform duration-300">
      <video src={src} muted={muted} loop autoPlay className="w-full m-8 border-2 border-gray-300"></video>
      <div className="absolute grid grid-cols-2 gap-0 h-full w-full">
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
