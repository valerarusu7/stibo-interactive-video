import { ArrowsExpandIcon, VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/solid";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

function Player({ switchSoundState, switchVideoState, openFullscreen, videoPlays, soundOn }) {
  return (
    <div className="flex flex-col justify-end items-center h-full">
      <div className="w-full p-3">
        <div className="p-1 flex justify-between items-center">
          <button className="cursor-pointer" onClick={switchVideoState}>
            {videoPlays ? (
              <BsPauseFill className="text-gray-400 w-10 h-10 cursor-pointer hover:text-gray-400" />
            ) : (
              <BsFillPlayFill className="text-gray-400 w-10 h-10 cursor-pointer hover:text-gray-400" />
            )}
          </button>
          <div className="flex">
            {soundOn ? (
              <VolumeUpIcon className="text-gray-400 w-10 h-10 cursor-pointer mr-2 hover:text-gray-400" onClick={switchSoundState} />
            ) : (
              <VolumeOffIcon className="text-gray-400 w-10 h-10 cursor-pointer mr-2 hover:text-gray-400" onClick={switchSoundState} />
            )}
            <ArrowsExpandIcon className="text-gray-400 w-10 h-10 cursor-pointer hover:text-gray-400" onClick={openFullscreen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
