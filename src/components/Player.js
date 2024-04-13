import React, { useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong, audioRef, songInfo, setSongInfo, isPlaying, setIsPlaying}) => {

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

	return (
		<div className="player">
			<div className="time-control">
			<p>{getTime(songInfo.currentTime)}</p>
				<input type="range" 
					min={0} 	
					max={songInfo.duration || 0} 
					value={songInfo.currentTime}
					onChange={dragHandler}
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon className="skip-back cursor-pointer" size="2x" icon={faAngleLeft}/>
				<FontAwesomeIcon onClick={playSongHandler} className="play cursor-pointer" size="2x" icon={isPlaying ? faPause: faPlay}/>
				<FontAwesomeIcon className="skip-foward cursor-pointer" size="2x" icon={faAngleRight}/>
			</div>
		</div>
	
	)
}

export default Player