import React, { useState, useRef } from 'react';
import "./styles/app.scss";

import Song from './components/Song';
import Player from './components/Player'
import Library from './components/Library';
import Nav from './components/Nav';

import chillhop from "./data";

function App() {

	//AUDIO
	const audioRef= useRef(null);

	//STATES
	const [songs, setSongs] = useState(chillhop)
	const [currentSong, setCurrentSong] = useState(songs[0])
	const [isPlaying, setIsPlaying] = useState(false)
	const [libraryStatus, setLibraryStatus] = useState(true);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0, 
		duration: 0,
		animationPercentage: 0,
	})

	//TIME
	// const timeUpdateHandler = (e) => {
	// 	const current = e.target.currentTime;
	// 	const duration = e.target.duration;

	// 	setSongInfo({...songInfo, currentTime: current, duration})
	// }

	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round((roundedCurrent / roundedDuration) * 100)

		setSongInfo({...songInfo, 
			currentTime: current, 
			duration, 
			animationPercentage: animation,
		})

		if (isPlaying) {
			audioRef.current.play()
		}
	}

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      	<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
		<Song currentSong={currentSong}/>
		<Player 
			songs={songs}
			setCurrentSong={setCurrentSong}
			audioRef={audioRef} 
			songInfo={songInfo}
			setSongInfo={setSongInfo}
			currentSong={currentSong} 
			isPlaying={isPlaying} 
			setIsPlaying={setIsPlaying}
			setSongs={setSongs}
		/>
		<Library 
			audioRef={audioRef}
			songs={songs} 
			libraryStatus={libraryStatus}
			currentSong={currentSong}
			setCurrentSong={setCurrentSong} 
			isPlaying={isPlaying}
			setIsPlaying={setIsPlaying} 
			setSongs={setSongs}
		/>

		<audio onTimeUpdate={timeUpdateHandler} 
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef} 
				src={currentSong.audio}>
		</audio>
    </div>
  );
}

export default App;