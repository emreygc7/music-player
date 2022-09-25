import { useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'
import { usePlayer } from '../../context/PlayerContext';

const PlayerControls = () => {
    
    const { songList, isPlaying, setIsPlaying, currentSong, setCurrentSong, progress, setProgress } = usePlayer()

    const audioRef = useRef()
    const progressRef = useRef()
 

    const playPause = () => {
        if(isPlaying){
            setIsPlaying(false)
            audioRef.current.pause()
        }else{
            setIsPlaying(true)
            audioRef.current.play()
        }
    }

    const previousSong = () => {
        setIsPlaying(true)
        currentSong <= 0 ? setCurrentSong(songList.length - 1) : setCurrentSong(currentSong - 1)
    }

    const nextSong = () => {
        setIsPlaying(true)
        currentSong >= songList.length - 1 ? setCurrentSong(0) : setCurrentSong(currentSong + 1)
    }

    const checkOffset = (e) => {
        const width = progressRef.current.clientWidth
        const offset = e.nativeEvent.offsetX
        const progress = offset / width * 100
        audioRef.current.currentTime = progress / 100 * audioRef.current.duration
    }

    const volumeSetting = (e) => {
        audioRef.current.volume = e.target.valueAsNumber
    }

    const onProgress = () => {
        const duration = audioRef.current.duration
        const currentTime = audioRef.current.currentTime
        setProgress(currentTime / duration * 100)
        if(duration === currentTime) {
          currentSong == songList.length - 1 ? setCurrentSong(0) : setCurrentSong(currentSong + 1)  
          setIsPlaying(true)
        }
      }

    const readableTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time - minutes * 60)
        const result = `${minutes}:${seconds < 10 ? "0" + seconds : seconds }`
        return result; 
    }

  return (
    <div className='control-container'>
        <audio src={songList[currentSong].src} ref={audioRef} autoPlay={isPlaying} onTimeUpdate={onProgress}></audio>
        <div>
            <div className='time'>
                <span>{audioRef.current?.currentTime ? readableTime(audioRef.current?.currentTime) : "0:00"}</span>
                <span>{audioRef.current?.duration ? readableTime(audioRef.current?.duration) : "0:00"}</span>
            </div>
            <div className='navigation' onClick={checkOffset} ref={progressRef}>
                <div className='bar' style={{width: `${progress+"%"}`}}></div>
            </div>
        </div>
        <div className='buttons-container'>
            <FaBackward onClick={previousSong} className="icon" />
            {
                isPlaying ? <FaPause onClick={playPause} /> : <FaPlay onClick={playPause} />
            }
            <FaForward onClick={nextSong}/>
            <input type="range" onChange={volumeSetting} max="1" min="0" step="0.1" />
        </div>
        <span style={{fontSize: "10px"}}>Next song: {currentSong >= 4 ? songList[0].title : songList[currentSong + 1].title }</span>
    </div>
  )
}

export default PlayerControls