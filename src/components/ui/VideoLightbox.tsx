'use client';

import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoLightbox({ isOpen, onClose, videoUrl }: VideoLightboxProps) {
  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      plugins={[Video]}
      video={{
        autoPlay: true,
        controls: true,
      }}
      slides={[
        {
          type: 'video',
          width: 1280,
          height: 720,
          poster: '/images/hero/bio-portrait-full.jpg',
          sources: [
            {
              src: videoUrl,
              type: 'video/mp4',
            },
          ],
        },
      ]}
    />
  );
}
