'use client';

import ReactPlayer from 'react-player';
import { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface VideoPlayerProps {
  youtubeId?: string;
  videoUrl?: string;
  title: string;
  thumbnail?: string;
}

export default function VideoPlayer({ youtubeId, videoUrl, title, thumbnail }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  // Generate YouTube thumbnail or use provided one
  const defaultThumbnail = youtubeId 
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : '/images/hero/bio-portrait-full.jpg'; // Fallback for local videos

  const url = youtubeId 
    ? `https://www.youtube.com/watch?v=${youtubeId}` 
    : videoUrl;

  return (
    <div className="group relative aspect-video overflow-hidden rounded-lg bg-black shadow-lg transition-all hover:shadow-xl">
      {!playing ? (
        <>
          <Image
            src={thumbnail || defaultThumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={!!youtubeId}
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40" />
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 active:scale-95"
            aria-label={`Play ${title}`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-2xl transition duration-300 group-hover:scale-110 group-hover:bg-white md:h-20 md:w-20">
              <Play size={32} className="ml-1" fill="currentColor" />
            </div>
          </button>
        </>
      ) : (
        <div className="h-full w-full">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            playing
            controls
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
