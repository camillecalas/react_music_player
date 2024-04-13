import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({audioRef, songs, libraryStatus, currentSong, setCurrentSong, isPlaying, setIsPlaying, setSongs}) => {
  	return (
		<div className={`library ${libraryStatus ? "active-library" : " "}`}>
			<h2> Library </h2>
			<div className="library-songs">
				{ songs.map(song => <LibrarySong 
										key={song.id}
										audioRef={audioRef}
										id = {song.id}
										currentSong={currentSong}
										song={song}
										songs={songs}
										setCurrentSong={setCurrentSong}
										setIsPlaying={setIsPlaying}
										isPlaying={isPlaying}
										setSongs={setSongs}
									/> )}
			</div>

		</div>
  	)
}

export default Library