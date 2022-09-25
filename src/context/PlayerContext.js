import { createContext, useContext, useState } from 'react'
import { songs } from '../data/songs'

const playerContext = createContext()

const PlayerContextProvider = ({children}) => {

    const [songList, setSongList] = useState(songs)
    const [currentSong, setCurrentSong] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)


  const playerData = {
        songList,
        setSongList,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        progress,
        setProgress
    }

  return (
    <playerContext.Provider value={playerData}>
        {children}
    </playerContext.Provider>
  )
}

export const usePlayer = () => {
    const context = useContext(playerContext)
    return context; 
}

export default PlayerContextProvider