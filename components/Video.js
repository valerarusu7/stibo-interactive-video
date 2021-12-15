import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import Choice from "../components/Choice";
import Image from "next/image";
import Loading from "./Loading";
import Player from "../components/Player";
import ShareButtons from "../components/ShareButtons";
import { addVideoSources } from "../store/reducers/interviewReducer";
import useInterval from "../components/useInterval";

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
  const [download, setDownload] = useState(0);
  const dispatch = useDispatch();

  useInterval(() => {
    if (download < 100) {
      setDownload(Number(download + 1));
    }
  }, 12);

  useEffect(() => {
    for (let i = 1; i < 13; i++) {
      var req = new XMLHttpRequest();
      req.open("GET", `http://localhost:5000/loops/${i}`, true);
      req.responseType = "blob";

      req.onload = function () {
        // Onload is triggered even on 404
        // so we need to check the status code
        if (this.status === 200) {
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob); // IE10+
          // Video is now downloaded
          // and we can set it as source on the video element
          dispatch(addVideoSources(vid));
          console.log("success");
          console.log(vid);
        }
      };
      req.onerror = function () {
        // Error
      };

      req.send();
    }
    video.current.load();
    video.current.currentTime = 0;
    bindChoice(41, "companies"); //good!
    bindChoice(120.4, "q1"); // good!
    bindChoice(135.6, "q2"); //good!
    bindChoice(151.9, "q3"); //good!
    bindChoice(167.4, "q4"); //good!
    bindChoice(182.3, "q5"); //good!
    bindChoice(196.6, "q6"); //good!
    bindChoice(209.6, "q7"); //good!
    bindChoice(213, "q8"); // good!
    bindChoice(215.9, "q9"); //good!
    bindChoice(250.9, "q10"); //good!
    bindChoice(269.1, "q11"); //good!
    bindChoice(283, "q12"); //good!
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
    if (video.current.currentTime > 0) {
      setTimeout(() => {
        video.current.play();
      }, 300);
    }
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
      <Loading download={download} />
      <div
        className={`${
          download === 100 ? "visible" : "hidden"
        } absolute w-full h-full overflow-hidden`}
      >
        <video ref={video} preload="auto">
          <source src="http://localhost:5000/video" type="video/mp4" />
        </video>
      </div>
      0
      {showForm ? (
        <div
          className={`${
            showForm ? " opacity-100" : "opacity-0"
          } z-10 relative w-full h-full flex justify-end items-center transform transition duration-1000`}
        >
          <div className=" h-full w-96 bg-gradient-to-tl from-white to-gray-100 p-4 flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center space-y-6">
              <Image
                src={require("../assets/images/stiboaccelerator_logo.png")}
              />
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
      <div
        className={`${showStartButton ? "visible" : "invisible"} ${
          download === 100 ? "visible" : "hidden"
        } absolute w-full h-full `}
      >
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
