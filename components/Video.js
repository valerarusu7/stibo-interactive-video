import { useEffect, useRef, useState } from "react";

import Choice from "../components/Choice";
import Image from "next/image";
import Player from "../components/Player";
import ShareButtons from "../components/ShareButtons";
import { useSelector } from "react-redux";

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

      <div className="absolute w-full h-full overflow-hidden">
        <video
          ref={video}
          src={
            "https://m204.syncusercontent1.com/mfs-60:30ce871c8ca5ff6e06bfdc09c1c18b5a=============================/p/stibo_main.mp4?allowdd=0&datakey=SFp09uEoEbWVuSUUBZtjZph8D8Ot3wIqp/+PT05Hr3sBGTZAdJ1BFz0KbiZ0e9jKe4ltxlf+5gRrkLu50qzLSsrv4c09cX97Sk5zCJkjm7Kr7TLyFdctN7+jnYnD8sdHBMVDWRZ9w/vYjnEGykcuh+vOIzLJ/C2hq6mFySb1IXt4XYIQ5OeeKdK/34oSaxfRiQts7/z4ISjXnXIqUR8Q1ZpG4Zpn+c9ovxROX4qtLqq+Y9oV8ACnLszGGWGhzIFW0VMRT+I/I5NoC2+z9oYy7/hSxj1pL4OLSS6vNtKPuX33EHHSV7oTp/UFAgjUEJxDrfmWuoheWBiqHEatY03qcg&engine=ln-1.11.7&errurl=PutOcUfSpViO0v2Kadw82wBe2yFY3QIIuFkIfjWczehJB1MgQR06WkNkGzLz0XT4bQXKDrROn44hM1EzPGxec82Cp45JRvM5PZH1n9G6k/+zzlpNwcr9TNMDiwVyzR5x3Tt8a0hAndrZBowJer2kV6xuls2Mr4OO/MahmKZ0ghphRFgSCxLmA3SfavIVJSoK0F6wWEYB8gNAdQ4f4mv9dggYOUvhtyPaTSSsUdXF1OUAMS0921iic9R8aVWXtFMtyms8ldUSnQB2dXuWRrZE66cuijfsaloKj1QRypmuFhHWOYzLpdO5sbP0CaEkLdSbl2Srhis0y4U81enmJzLsqw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0ic3RpYm9fbWFpbi5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnc3RpYm9fbWFpbi5tcDQ7&ipaddress=3642533107&linkcachekey=8ab21c0d0&linkoid=1252370013&mode=101&sharelink_id=7013777440013&timestamp=1638977126515&uagent=72d280e4492dd44e418a70a3f6019884db193aa2&signature=f79c76c34088a79291f86e8bffe8f5b4a3081d5c&cachekey=60:30ce871c8ca5ff6e06bfdc09c1c18b5a============================="
          }
          type="video/mp4"
          className="object-fill"
        />
      </div>
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
        className={`${
          showStartButton ? "visible" : "invisible"
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
