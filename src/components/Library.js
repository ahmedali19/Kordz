import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  libraryState,
}) => {
  return (
    <div className={`library ${libraryState ? "toggled-lib" : ""}`}>
      <h1>Library</h1>
      <div className="library-songlist">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setSongs={setSongs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
