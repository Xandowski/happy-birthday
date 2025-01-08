'use client'

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'


export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const songs = [
    { src: "/parabens-da-xuxa.mp3" }
  ]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.muted = isMuted
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, volume, isMuted, currentSong])

  useEffect(() => {
    setIsPlaying(true)
  }, [])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
    setIsMuted(false)
  }

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length)
  }

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length)
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
      <audio ref={audioRef} src={songs[currentSong].src} loop />
      <div className="flex items-center space-x-2">
        <Button onClick={prevSong} variant="ghost" size="icon">
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button onClick={togglePlay} variant="ghost" size="icon">
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
        <Button onClick={nextSong} variant="ghost" size="icon">
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>
      <Button onClick={toggleMute} variant="ghost" size="icon">
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </Button>
      <Slider
        min={0}
        max={1}
        step={0.01}
        value={[volume]}
        onValueChange={handleVolumeChange}
        className="w-32"
      />
      <span className="text-sm font-medium">{songs[currentSong].title}</span>
    </div>
  )
}

