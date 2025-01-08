'use client'

import { Button } from "@/components/ui/button"
import { Cake, Heart, Music, Star, Wand2 } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import AudioPlayer from './components/AudioPlayer'

export default function PersonalizedBirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    handleCelebrate();
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleCelebrate = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false);
    }, 15000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center justify-center p-4 relative">
      {showConfetti && <Confetti width={windowSize.width} height={windowHeight} />}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-2">Parabéns, Mariana!</h1>
        <p className="text-[18px] text-pink-600">❣️ Que todos seus sonhos seu realizem ❣️</p>
      </header>
      
      <main className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Image
            src="/middle-finger.jpg?height=400&width=400"
            alt="mari"
            width={400}
            height={400}
            className="rounded-lg shadow-lg p-3 border-2"
          />
          <Image
            src="/mari_2.jpeg?height=400&width=400"
            alt="Mariana rocking out"
            width={400}
            height={400}
            className="rounded-lg shadow-lg p-3 border-2"
          />
        </div>
        <div className="bg-orange-100 p-6 rounded-lg shadow-lg text-center mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Uma mensagem de Hogwarts</h2>
          <p className="text-lg text-gray-700 mb-4">
            Mariana,<br /><br />
            Feliz aniversário! 🪄 Que este dia seja mágico e que sua vida seja cheia de 
            aventuras dignas de um verdadeiro bruxo. Que o Chapéu Seletor sempre te 
            coloque nos melhores caminhos, e que você tenha coragem 
            de um grifinório, lealdade de um lufano, sabedoria de um corvino e astúcia 
            de um sonserino para realizar todos os seus sonhos. Que sua felicidade 
            seja tão constante quanto um Patrono! 🎂✨
          </p>
          <div className="flex justify-center space-x-2">
            <Heart className="text-pink-500" />
            <Star className="text-yellow-500" />
            <Cake className="text-purple-500" />
            <Music className="text-blue-500" />
            <Wand2 className="text-indigo-500" />
          </div>
        </div>
       
        <div className="text-center">
          <Button onClick={handleCelebrate} size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
          🎉 Celebrar 🎉
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start">
          <Image
              src="/mari_3.jpeg?height=400&width=400"
              alt="mari"
              width={300}
              height={300}
              className="lg:absolute lg:top-8 lg:left-8 rounded-lg shadow-lg p-3 border-2 transform -rotate-12"
            />
          <Image
                src="/mari_6.jpeg?height=400&width=400"
                alt="mari"
                width={300}
                height={300}
                className="rounded-lg shadow-lg p-3 border-2 lg:absolute lg:top-96 lg:left-8  transform rotate-12"
              />
          <Image
            src="/mari_1.jpeg?height=400&width=400"
            alt="mari"
            width={300}
            height={300}
            className="rounded-lg shadow-lg p-3 border-2 lg:absolute lg:top-8 lg:right-8 transform rotate-12"
          />
          <Image
                src="/mari_4.jpeg?height=400&width=400"
                alt="mari"
                width={300}
                height={300}
                className="rounded-lg shadow-lg p-3 border-2 transform -rotate-12 lg:absolute lg:top-96 lg:right-8"
              />
        </div>
      </main>
      <footer className="mt-16 text-center text-purple-800">
        <p>&copy; {new Date().getFullYear()} | Made with love (and a bit of magic) for Mariana's special day</p>
      </footer>
      <AudioPlayer />
    </div>
  )
}

