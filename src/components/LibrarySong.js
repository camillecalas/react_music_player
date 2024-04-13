
const LibrarySong = ({song, audioRef, songs, setCurrentSong, isPlaying, setIsPlaying, setSongs}) => {

	const songSelectHandler = () => {
		const updatedSongs = songs.map(s => ({
            ...s,
            active: s.id === song.id // Set active to true for the selected song, false for others
        }));

		setCurrentSong({ ...song })

        setSongs(updatedSongs);
		if (isPlaying) {
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
			  playPromise
				.then((audio) => {
				  audioRef.current.play();
				})
				.catch((error) => console.log(error));
			}
		}		
	}

	console.log(song.active)

	return (
		<div className={`library-song ${song.active ? 'selected' : ''}`}
			onClick={songSelectHandler}
		>
			<img src={song.cover} alt={song.name}/>
			<div className='song-description'>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	)
}

export default LibrarySong