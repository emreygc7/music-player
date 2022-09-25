import SongInfo from "./SongInfo"
import PlayerControls from "./PlayerControls"

const Player = () => {    
    return (
    <div className="player-container">
        <SongInfo />
        <PlayerControls />
    </div>
  )
}

export default Player