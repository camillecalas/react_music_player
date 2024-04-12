import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

const Player = () => {
	return (
		<div className="player">
			<div className="time-control">
				<h1>time start</h1>
				<input type="range"ç/>
				<h1>time end</h1>
			</div>
			<div className="play-control">
				<FontAwesomeIcon className="skip-back cursor-pointer" size="2x" icon={faAngleDoubleLeft}/>
				<FontAwesomeIcon className="play cursor-pointer" size="2x" icon={faPlay}/>
				<FontAwesomeIcon className="skip-foward cursor-pointer" size="2x" icon={faAngleDoubleRight}/>
			</div>
		</div>
	
	)
}

export default Player