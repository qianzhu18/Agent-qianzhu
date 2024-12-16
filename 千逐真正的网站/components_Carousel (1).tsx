'use client'

import Image from 'next/image'

export default function Carousel() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/汽水老封面.jpg-WvC1C8XgvZ0MU7RNl4Oaod06EONlE5.jpeg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-glow hover-scroll">
          欢迎来到 Agent designer——千逐的个人网站
        </h1>
      </div>
    </div>
  )
}

