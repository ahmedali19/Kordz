import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songTime,
  setSongTime,
}) => {
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const inputDragHandler = (e) => {
    setSongTime({ ...songTime, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const skipTrackHandler = async (type) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (type === "next") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      songActiveHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (type === "prev") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        songActiveHandler(songs[songs.length - 1]);
        if (isPlaying) {
          audioRef.current.play();
        }
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      songActiveHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const songActiveHandler = (direction) => {
    const newSongs = songs.map((s) => {
      if (s.id === direction.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  //Convert time to standard format
  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  return (
    <div className="player">
      <div className="time-controls">
        <span>{getTime(songTime.currentTime)}</span>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songTime.duration || 0}
            value={songTime.currentTime}
            onChange={inputDragHandler}
            type="range"
          />
          <div
            style={{
              transform: `translateX(${songTime.animationPercentage}%)`,
            }}
            className="animate-track"
          ></div>
        </div>
        <span>{songTime.duration ? getTime(songTime.duration) : "0:00"}</span>
      </div>

      <div className="play-controls">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("prev")}
          className="skip-prev"
          icon={faAngleLeft}
          size="3x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="3x"
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("next")}
          className="skip-next"
          icon={faAngleRight}
          size="3x"
        />
      </div>
    </div>
  );
};

export default Player;
