import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import songData from "./songData";
import Library from "./components/Library";

function App() {
  //States
  const [songs, setSongs] = useState(songData()); //Store songData
  const [currentSong, setCurrentSong] = useState(songs[0]); //Set and store current song
  const [isPlaying, setIsPlaying] = useState(false); //Set and store current song playing state
  const [libraryState, setLibraryState] = useState(false);
  const [songTime, setSongTime] = useState({
    //Set and store song time info
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  //Refer audio tag & Audio Event Handler
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const animationPercentage = Math.round((currentTime / duration) * 100);
    console.log(animationPercentage);
    setSongTime({ ...songTime, currentTime, duration, animationPercentage });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <div className={`App ${libraryState ? "library-active" : ""}`}>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songTime={songTime}
        setSongTime={setSongTime}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        libraryState={libraryState}
      />
    </div>
  );
}

export default App;
