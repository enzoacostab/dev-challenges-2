import { Dispatch, SetStateAction, useRef, useState } from "react"
import { Song } from "../types"
import songs from "../songs"

type Props = {
  setSong: Dispatch<SetStateAction<Song>>,
  song: Song
}

export default function Controls({setSong, song}: Props) {
  const audioRef = useRef<HTMLAudioElement>(document.createElement('audio'))
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [audio, setAudio] = useState({duration: '', currentTime: '', playing: false})

  const handlePlay = () => {
    audioRef.current?.play()
    setAudio(prev => ({
      ...prev,
      playing: true
    }))
  }

  const handlePause = () => {
    audioRef.current?.pause()
    setAudio(prev => ({
      ...prev,
      playing: false
    }))
  }

  const handleAudioChange = () => {
    let currentTimeMin = Math.floor(audioRef.current.currentTime / 60).toString()
    let currentTimeSec = Math.floor(audioRef.current.currentTime % 60).toString()
    currentTimeMin = Number(currentTimeMin) < 10 ? `0${currentTimeMin}` : currentTimeMin
    currentTimeSec = Number(currentTimeSec) < 10 ? `0${currentTimeSec}` : currentTimeSec
    const currentTime = `${currentTimeMin}:${currentTimeSec}`

    let durationMin = Math.floor(audioRef.current.duration / 60).toString()
    let durationSec = Math.floor(audioRef.current.duration % 60).toString()
    durationMin = Number(durationMin) < 10 ? `0${durationMin}` : durationMin
    durationSec = Number(durationSec) < 10 ? `0${durationSec}` : durationSec
    const duration = `${durationMin}:${durationSec}`

    setAudio(prev => ({
      ...prev,
      currentTime,
      duration
    }))
  }

  const handleNextSong = () => {
    if (currentSongIndex < songs.length-1) {
      const newIndex = currentSongIndex+1
      setCurrentSongIndex(newIndex)
      setSong(songs[newIndex])
    }
  }

  const handlePrevSong = () => {
    if (currentSongIndex > 0) {
      const newIndex = currentSongIndex-1
      setCurrentSongIndex(newIndex)
      setSong(songs[newIndex])
    }
  }
  return (
    <>
      <audio ref={audioRef} src={song.src} onCanPlay={handleAudioChange} onTimeUpdate={handleAudioChange} />
      <div>
        <div className="flex justify-between mb-[-10px]">
          <p className="text-[#4D5562] text-sm">{audio.currentTime}</p>
          <p className="text-[#4D5562] text-sm">{audio.duration}</p>
        </div>
        <progress className="bg-[#E5E7EB] h-1" max={audio.duration.toString()} value={audio.currentTime}></progress>
      </div>
      <div className="flex gap-3 justify-center">
        <button className="rounded-full hover:bg-opacity-10 hover:bg-gray-400 px-2" onClick={handlePrevSong}>
          <img src="/assets/image/Stop_and_play_fill.svg" width={40} alt="" />
        </button>
        <button onClick={audio.playing ? handlePause : handlePlay} className="bg-[#C93B76] focus-visible:outline-none h-14 w-14 active:opacity-60 rounded-full flex justify-center items-center shadow-[0px_10px_70px_#C93B76]">
        {audio.playing 
          ? <img width={40} src="/assets/image/Stop_fill.svg" alt="" />
          : <img width={40} src="/assets/image/Play_fill.svg" alt="" />}
        </button>
        <button className="rounded-full hover:bg-opacity-10 hover:bg-gray-400 px-2" onClick={handleNextSong}>
          <img width={40} src="/assets/image/Stop_and_play_fill_reverse.svg" alt="" />
        </button>
      </div>
    </>
  )
}