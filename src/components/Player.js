import React, { useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({songs, setSongs, setCurrentSong, currentSong, audioRef, songInfo, setSongInfo, isPlaying, setIsPlaying}) => {

	const getTime = (time) => {
		return (
			Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		)
	}

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value
		setSongInfo({...songInfo, currentTime: e.target.value})
	}

	const playSongHandler = () => {
		isPlaying ? audioRef.current.pause() :audioRef.current.play();
		setIsPlaying(prevIsPlaying => !prevIsPlaying);
	}	

	const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        let newIndex = 0;
        if (direction === "skip-forward") {
            newIndex = (currentIndex + 1) % songs.length;
        } else if (direction === "skip-back") {
            newIndex = (currentIndex - 1 + songs.length) % songs.length;
        }
        setCurrentSong(songs[newIndex]);

        const updatedSongs = songs.map((song, index) => ({
            ...song,
            active: index === newIndex
        }));
        setSongs(updatedSongs);
    }
	

	const trackAnim = {
		transform: `translateX(${songInfo.animationPercentage}%)`,
	  };

	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<div className="track" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
					<input type="range" 
						min={0} 	
						max={songInfo.duration || 0} 
						value={songInfo.currentTime}
						onChange={dragHandler}
					/>
					<div className="animate-track" style={trackAnim}></div>
				</div>
					<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon onClick={() => skipTrackHandler("skip-back")} 
					className="skip-back cursor-pointer" size="2x" icon={faAngleLeft}/>
				<FontAwesomeIcon onClick={playSongHandler} 
					className="play cursor-pointer" size="2x" icon={isPlaying ? faPause: faPlay}
				/>
				<FontAwesomeIcon onClick={() => skipTrackHandler("skip-forward")}
					className="skip-foward cursor-pointer" size="2x" icon={faAngleRight}/>
			</div>
		</div>
	
	)
}

export default Player