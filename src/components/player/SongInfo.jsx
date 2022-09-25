import { usePlayer } from "../../context/PlayerContext"

const SongInfo = () => {

    const {songList, currentSong, isPlaying} = usePlayer()
    
  return (
    <div className="song-info-container">
        <img className={isPlaying ? "animated-img" : ""} src={songList[currentSong].img} alt="cover" />
        <h3>{songList[currentSong].title}</h3>
        <span>{songList[currentSong].singer}</span>
    </div>
  )
}

export default SongInfo
