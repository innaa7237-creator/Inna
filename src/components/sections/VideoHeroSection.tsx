'use client';

import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function VideoHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.warn("Video autoplay failed:", err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black md:h-[85vh] lg:h-screen">
      {/* 
        Відео без постера та заставок. 
        Атрибути preload="auto" та autoPlay забезпечують максимально швидкий старт.
      */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video/hero-main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Елегантне затемнення для читабельності тексту поверх відео */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Кнопка звуку */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute' : 'Mute'}
        className="absolute bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition duration-300 hover:bg-white/20 border border-white/20 hover:scale-110 active:scale-95"
      >
        {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      
      {/* Градієнт знизу для плавного переходу до наступної секції */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
