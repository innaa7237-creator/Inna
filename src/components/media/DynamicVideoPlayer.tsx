import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
  loading: () => (
    <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-primary-200">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
        <p className="text-sm text-gray-600">Loading video player...</p>
      </div>
    </div>
  ),
  ssr: false,
});

export default VideoPlayer;
