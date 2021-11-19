import { useRef, useState } from "react";

import Companies from "../components/Companies";
import Image from "next/image";
import Player from "../components/Player";
import ShareButtons from "../components/ShareButtons";
import { motion } from "framer-motion";

export default function Home() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [videoPlays, setVideoPlays] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [showCompanies, setShowCompanies] = useState(false);
  const video = useRef();

  function playVideo() {
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
      video.current.mute = true;
    }
    if (!soundOn) {
      setSoundOn(true);
      video.current.mute = false;
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

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden ">
      {showCompanies ? (
        <div className="z-50 w-full h-full">
          <Companies />
        </div>
      ) : null}

      <div className="absolute w-full h-full overflow-hidden">
        <video
          ref={video}
          src={require("../assets/videos/scene4.mp4")}
          onEnded={() => setShowCompanies(true)}
          className='object-fill'
        />
      </div>
      {showStartButton ? (
        <div className="absolute w-full h-full ">
          <div className="flex flex-col justify-center items-center h-full">
            <button
              className="z-50 bg-black opacity-75 rounded-full p-4 w-48 h-48 hover:scale-105 transition transform duration-400"
              onClick={() => playVideo()}
            >
              <p className="text-white font-bold">Start the interview</p>
            </button>
          </div>
        </div>
      ) : null}
      <div className="absolute flex justify-between flex-col w-full h-full">
        <ShareButtons />
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
