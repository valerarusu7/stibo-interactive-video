import Companies from "./Companies";

function Choice({ question, onClick }) {
  return (
    <div className="relative h-full ">
      {question === "q1" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Bachelor project
          </button>
          <video src={require("../assets/videos/loop_q1.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Master thesis
          </button>
        </div>
      ) : null}
      {question === "q2" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Business potential
          </button>
          <video src={require("../assets/videos/loop_q2.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Tech and programming
          </button>
        </div>
      ) : null}
      {question === "q3" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            HQ in Denmark
          </button>
          <video src={require("../assets/videos/loop_q3.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Atlanta/London
          </button>
        </div>
      ) : null}
      {question === "q4" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            That we provide you with a research problem
          </button>
          <video src={require("../assets/videos/loop_q4.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            To work on your own idea
          </button>
        </div>
      ) : null}
      {question === "q5" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            To work with something you already know
          </button>
          <video src={require("../assets/videos/loop_q5.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            To investigate unknown teritorry
          </button>
        </div>
      ) : null}
      {question === "q6" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Master data management
          </button>
          <video src={require("../assets/videos/loop_q6.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Software for storytelling
          </button>
        </div>
      ) : null}
      {question === "q7" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            By comparing different theories
          </button>
          <video src={require("../assets/videos/loop_q7.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Experimenting with real world cases
          </button>
        </div>
      ) : null}
      {question === "q8" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            An open environment with other people
          </button>
          <video src={require("../assets/videos/loop_q8.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            My own quiet office space
          </button>
        </div>
      ) : null}
      {question === "q9" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Yes
          </button>
          <video src={require("../assets/videos/loop_q9.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            No
          </button>
        </div>
      ) : null}
      {question === "q10" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            I'm joining an established company
          </button>
          <video src={require("../assets/videos/loop_q10.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            I'm using my project to kickstart my own startup
          </button>
        </div>
      ) : null}

      {question === "q11" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Fronted/UX
          </button>
          <video src={require("../assets/videos/loop_q11.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Backend/Development
          </button>
        </div>
      ) : null}

      {question === "q12" ? (
        <div className=" flex justify-center items-center h-full">
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Meat/fish
          </button>
          <video src={require("../assets/videos/loop_q12.mp4")} loop autoPlay className="w-1/2 m-8"></video>
          <button
            className="border-2 border-black pl-4 pb-2 pt-2 pr-4 bg-white text-black font-bold text-xl font-helvetica rounded-full h-32 w-32"
            onClick={onClick}
          >
            Salad
          </button>
        </div>
      ) : null}

      {question === "companies" ? <Companies onClick={onClick} /> : null}
    </div>
  );
}

export default Choice;
