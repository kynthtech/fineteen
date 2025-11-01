import { useRef } from "react";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerTimeRange,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerTimeDisplay,
  VideoPlayerVolumeRange,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerFullscreenButton,
  type VideoPlayerContentProps,
} from "@components/interfaces/VideoPlayerLib";

function VideoPlayerView(props: VideoPlayerContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFullscreenToggle = async () => {
    if (screen.orientation) {
      (screen.orientation as any).lock("landscape");
    }
  };

  return (
    <VideoPlayer className="h-full w-full overflow-hidden bg-gray-950">
      <VideoPlayerContent
        ref={videoRef}
        className={`h-full transition-transform duration-500`}
        preload="auto"
        slot="media"
        {...props}
      />

      <VideoPlayerControlBar className="m-0.5 space-x-1 rounded-md bg-gray-500/70 backdrop-blur-md sm:m-2 dark:bg-gray-700/70">
        <VideoPlayerPlayButton className="rounded-l-md bg-transparent transition-all hover:bg-gray-600" />
        <VideoPlayerSeekBackwardButton className="bg-transparent transition-all hover:bg-gray-600" />
        <VideoPlayerSeekForwardButton className="bg-transparent transition-all hover:bg-gray-600" />
        <VideoPlayerTimeRange className="bg-transparent" />
        <VideoPlayerTimeDisplay
          showDuration
          className="bg-transparent transition-all hover:bg-gray-600"
        />
        <VideoPlayerMuteButton className="bg-transparent transition-all hover:bg-gray-600" />
        <VideoPlayerFullscreenButton
          className="bg-transparent transition-all hover:bg-gray-600"
          onClick={handleFullscreenToggle}
        />
        <VideoPlayerVolumeRange className="hidden rounded-r-md bg-transparent transition-all hover:bg-gray-600 sm:block" />
      </VideoPlayerControlBar>
    </VideoPlayer>
  );
}

export default VideoPlayerView;
