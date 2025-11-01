import { useRef, useState } from "react";
import demoVideo from "@assets/videos/demo-video.mkv";
import { MdClose, MdFullscreen, MdPause, MdPlayArrow } from "react-icons/md";
import { Button, IconButton } from "@radix-ui/themes";
type Props = {
  close: (param: boolean) => void;
};

function DemoVideo({ close }: Props) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const demoVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!isVideoPlaying) {
      demoVideoRef.current?.play();
      setIsVideoPlaying(true);
    } else {
      demoVideoRef.current?.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-100 flex h-screen w-screen items-center justify-center bg-gray-900/80">
      <div className="relative m-2 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border border-gray-300 bg-gray-800 p-4 sm:w-2/3 dark:border-gray-700">
        <video
          className="w-full rounded-lg"
          muted
          ref={demoVideoRef}
          src={demoVideo}
        />
        <div className="flex gap-4">
          <Button
            onClick={handlePlayPause}
            radius="medium"
            variant="solid"
            color={isVideoPlaying ? "gray" : "cyan"}
          >
            {!isVideoPlaying ? (
              <>
                <MdPlayArrow /> Play Video
              </>
            ) : (
              <>
                <MdPause />
                Pause Video
              </>
            )}
          </Button>
          <Button
            onClick={() => demoVideoRef.current?.requestFullscreen()}
            color="green"
            radius="medium"
            variant="solid"
          >
            <MdFullscreen /> Full Screen
          </Button>
        </div>
        <IconButton
          radius="medium"
          color="red"
          onClick={() => close(false)}
          className="!absolute !top-2 !right-2"
        >
          <MdClose size={20} />
        </IconButton>
      </div>
    </div>
  );
}

export default DemoVideo;
