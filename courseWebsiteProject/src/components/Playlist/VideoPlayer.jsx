import { useContext } from "react";
import { VideosContext } from "../../store/VideosContext";
import useYoutubeVideo from "../../hooks/useYoutubeVideo";

export default function YouTubePlayer() {
  const {
    videos,
    currentVideoIndex,
    setCurrentVideoIndex,
    setWatchPercent: setProgress,
  } = useContext(VideosContext);
  const videoId = videos[currentVideoIndex].youtubeUrl.split("/").pop();
  const onVideoEnd = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      // If the video has ended either increment the video or start the playlist over
      setCurrentVideoIndex((prev) => {
        return (prev + 1) % videos.length;
      });
    }
  };

  // When the page loads create the callback function so that the YouTube API can create the video.
  const { playerRef, containerRef, playerReady } = useYoutubeVideo(
    videoId,
    onVideoEnd,
    setProgress,
  );

  // User controls
  const play = () => {
    console.log(playerRef.current);
    playerRef.current.playVideo();
  };
  const pause = () => playerRef.current.pauseVideo();
  const restart = () => playerRef.current.seekTo(0);
  const speedUp = () => {
    const currentSpeed = playerRef.current.getPlaybackRate();
    playerRef.current.setPlaybackRate(currentSpeed + 0.25);
  };

  return (
    <div>
      <div ref={containerRef}></div>
      {playerReady && (
        <>
          <button onClick={speedUp}>{">>"}</button>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={restart}>Restart</button>
        </>
      )}
    </div>
  );
}
