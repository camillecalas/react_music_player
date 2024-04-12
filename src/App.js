import React, { useState } from 'react';
import "./styles/app.scss";

import Song from './components/Song';
import Player from './components/Player'

import chillhop from "./data";

function App() {

	const [songs, setSong] = useState(chillhop)
	const [currentSong, setCurrentSong] = useState(songs[0])
	console.log(currentSong.name)

  return (
    <div className="App">
		<Song currentSong={currentSong}/>
		<Player />
    </div>
  );
}

export default App;