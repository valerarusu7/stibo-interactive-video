import { useEffect, useRef, useState } from "react";

import Choice from "../components/Choice";
import Companies from "../components/Companies";
import Player from "../components/Player";
import ShareButtons from "../components/ShareButtons";

export default function Home() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [videoPlays, setVideoPlays] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showShareButtons, setShowShareButtons] = useState(true);
  const video = useRef();
  const [question, setQuestion] = useState("");
  const [stopped, setStopped] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    video.current.load();
    video.current.currentTime = 195;

    // bindChoice(41, "companies"); //good!
    // bindChoice(120.6, "q1"); // good!
    // bindChoice(135.8, "q2"); //good!
    // bindChoice(152, "q3"); //good!
    // bindChoice(167.5, "q4"); //good!
    // bindChoice(182.4, "q5"); //good!
    bindChoice(196.7, "q6"); //good!
    bindChoice(209.7, "q7"); //good!
    bindChoice(213.1, "q8"); // good!
    bindChoice(216, "q9"); //good!
    bindChoice(251, "q10"); //good!
    bindChoice(269.2, "q11"); //good!
    bindChoice(283.1, "q12"); //good!
  }, []);

  function bindChoice(time, question) {
    const choice = function () {
      if (this.currentTime >= time) {
        this.pause();

        setStopped(true);
        console.log(question);
        console.log(this.currentTime, question);
        this.removeEventListener("timeupdate", choice);
        setQuestion(question);
        setShowQuestion(true);
      }
    };
    video.current.addEventListener("timeupdate", choice);
  }

  function playVideo() {
    console.log(question);
    video.current.play();
    setShowStartButton(false);
    setShowPlayer(true);
    setVideoPlays(true);
  }

  function switchVideoState() {
    if (videoPlays) {
      setVideoPlays(false);
      video.current.pause();
    }
    if (!videoPlays) {
      setVideoPlays(true);
      video.current.play();
    }
  }

  function switchSoundState() {
    if (soundOn) {
      setSoundOn(false);
      video.current.muted = true;
    }
    if (!soundOn) {
      setSoundOn(true);
      video.current.muted = false;
    }
  }

  function openFullscreen() {
    if (video.current.requestFullscreen) {
      video.current.requestFullscreen();
    } else if (video.current.webkitRequestFullscreen) {
      /* Safari */
      video.current.webkitRequestFullscreen();
    } else if (video.current.msRequestFullscreen) {
      /* IE11 */
      video.current.msRequestFullscreen();
    }
  }

  function playNextVideo(e) {
    console.log(e);
    console.log(question);
    if (question === "companies") {
      video.current.currentTime = 41.71;
    }
    if (question === "q1") {
      video.current.currentTime = 121.29;
    }
    if (question === "q2") {
      video.current.currentTime = 136.11;
    }
    if (question === "q3") {
      video.current.currentTime = 152.65;
    }
    if (question === "q4") {
      video.current.currentTime = 168.29;
    }
    if (question === "q5") {
      video.current.currentTime = 183.08;
    }
    if (question === "q6") {
      video.current.currentTime = 198.35;
    }
    if (question === "q7") {
      video.current.currentTime = 210.05;
    }
    if (question === "q8") {
      video.current.currentTime = 213.61;
    }
    if (question === "q9") {
      video.current.currentTime = 216.25;
    }
    if (question === "q10") {
      video.current.currentTime = 251.67;
    }
    if (question === "q11") {
      video.current.currentTime = 269.67;
    }
    if (question === "q12") {
      video.current.currentTime = 283.47;
    }
    setShowQuestion(false);
    video.current.play();
    setShowPlayer(true);
    setVideoPlays(true);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden ">
      {showQuestion ? (
        <div className="z-50 w-full h-full">
          <Choice question={question} onClick={(e) => playNextVideo(e)} />
        </div>
      ) : null}

      <div className="absolute w-full h-full overflow-hidden">
        <video ref={video} src={require("../assets/videos/stibo_v3.mp4")} type="video/mp4" className="object-fill" />
        {/* <div className="bg-red-200 w-96">asfas</div> */}
      </div>
      <div className={`${showStartButton ? "visible" : "invisible"} absolute w-full h-full `}>
        <div className="flex flex-col justify-center items-center h-full">
          <button
            className="z-50 bg-black opacity-75 rounded-full p-4 w-48 h-48 hover:scale-105 transition transform duration-400"
            onClick={() => playVideo()}
          >
            <p className="text-white font-bold">Start the interview</p>
          </button>
        </div>
      </div>
      <div className="absolute flex justify-between flex-col w-full h-full">
        {showShareButtons ? <ShareButtons /> : null}
        {showPlayer ? (
          <Player
            videoPlays={videoPlays}
            soundOn={soundOn}
            openFullscreen={() => openFullscreen()}
            switchVideoState={() => switchVideoState()}
            switchSoundState={() => switchSoundState()}
          />
        ) : null}
      </div>
    </div>
  );
}
