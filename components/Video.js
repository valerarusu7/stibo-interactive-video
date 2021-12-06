import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Choice from "../components/Choice";
import Player from "../components/Player";
import ShareButtons from "../components/ShareButtons";
import Image from "next/image";

function Video() {
  const { answers } = useSelector((state) => state.interview);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [videoPlays, setVideoPlays] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showShareButtons, setShowShareButtons] = useState(false);
  const video = useRef();
  const [question, setQuestion] = useState("");
  const [stopped, setStopped] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    video.current.load();
    video.current.currentTime = 0;
    bindChoice(41, "companies"); //good!
    bindChoice(120.6, "q1"); // good!
    bindChoice(135.8, "q2"); //good!
    bindChoice(152, "q3"); //good!
    bindChoice(167.5, "q4"); //good!
    bindChoice(182.4, "q5"); //good!
    bindChoice(196.7, "q6"); //good!
    bindChoice(209.7, "q7"); //good!
    bindChoice(213.1, "q8"); // good!
    bindChoice(216, "q9"); //good!
    bindChoice(251, "q10"); //good!
    bindChoice(269.2, "q11"); //good!
    bindChoice(283.1, "q12"); //good!
    const form = function () {
      if (this.currentTime >= 320) {
        setShowForm(true);
        setShowPlayer(false);
      }
    };
    video.current.addEventListener("timeupdate", form);

    setShowPlayer(false);
    setShowShareButtons(false);
  }, []);

  useEffect(() => {
    console.log(answers);
    if (question === "companies") {
      video.current.currentTime = 41.71;
    }

    if (answers.length !== 0) {
      setShowPlayer(true);
      setShowShareButtons(true);
    }
    setShowQuestion(false);
    setVideoPlays(true);
    setTimeout(() => {
      video.current.play();
    }, 300);
  }, [answers]);

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
        setShowPlayer(false);
        setShowShareButtons(false);
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
    setShowShareButtons(true);
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

  function playNextVideo() {
    setShowPlayer(true);
    setShowShareButtons(true);

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
      </div>
      {showForm ? (
        <div
          className={`${
            showForm ? " opacity-100" : "opacity-0"
          } z-10 relative w-full h-full flex justify-end items-center transform transition duration-1000`}
        >
          <div className=" h-full w-96 bg-gradient-to-tl from-white to-gray-100 p-4 flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center space-y-6">
              <Image src={require("../assets/images/stiboaccelerator_logo.png")} />
              <p className="font-bold">Stay in our amazing Talent Pool</p>
              <input
                type="text"
                placeholder="Email"
                className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-400"
              />

              <div className="grid grid-cols-2 gap-6 justify-center items-center">
                <input
                  type="text"
                  placeholder="First name"
                  className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-400"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-400"
                />
              </div>
              <div className="flex justify-evenly items-center w-full">
                <button className="bg-white text-black p-2 rounded-lg pl-4 pr-4 font-semibold shadow hover:opacity-80">
                  <p>Repeat the MeetUp</p>
                </button>
                <button className="bg-[#241f21] text-white p-2 rounded-lg pl-4 pr-4 font-semibold shadow hover:opacity-80">
                  <p>Submit</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

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

export default Video;