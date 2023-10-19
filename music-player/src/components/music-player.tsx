import { useState } from "react"
import songs from "../songs"
import Controls from "./controls"


export default function MusicPlayer() {
  const [song, setSong] = useState(songs[0])
  
  return (
    <div className="bg-[rgb(33,41,54)] rounded-3xl w-[400px] overflow-hidden p-5">
      <div className="flex justify-between h-full w-full flex-col gap-5 pb-3">
        <div>
          <img src={song.img} className="rounded-2xl" alt="song image" />
          <h2 className="text-[#E5E7EB] text-center mt-4 text-lg font-bold">{song.name}</h2>
          <h3 className="text-[#4D5562] text-center">{song.artist}</h3>
        </div>
        <Controls setSong={setSong} song={song}/>
      </div>
    </div>
  )
}