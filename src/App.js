import React, { useState } from 'react';
import "./styles/app.scss";

import Song from './components/Song';
import Player from './components/Player'
import Library from './components/Library';

import chillhop from "./data";

function App() {

	const [songs, setSong] = useState(chillhop)
	const [currentSong, setCurrentSong] = useState(songs[0])
	const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
		<Song currentSong={currentSong}/>
		<Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>\
		<Library songs={songs} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} setSong={setSong}/>
    </div>
  );
}

export default App;