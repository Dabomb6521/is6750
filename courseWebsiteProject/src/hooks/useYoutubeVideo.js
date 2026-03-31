import { useEffect, useRef, useState } from "react";


export default function useYoutubeVideo(videoId, onVideoEnd, setProgress) {
  // Create two refs. One for the container and one for the video.
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);


  useEffect(() => {
      function createPlayer() {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId,
          // subscribe to specific events
          events: {
            onReady: () => setPlayerReady(true),
            onStateChange: onVideoEnd,
          },
        });
      }
  
      if (window.YT && window.YT.Player) {
        createPlayer();
      } else {
        window.onYouTubeIframeAPIReady = createPlayer;
      }
  
      return () => playerRef.current?.destroy();
    }, []);

    // When the video progresses, accept the elapsed time and total time and caluclate a percentatge completed.
    useEffect(() => {
    let timer;
    if (playerRef.current && playerRef.current.getDuration && playerReady) {
      timer = setInterval(() => {
        const total = playerRef.current.getDuration()
          ? playerRef.current.getDuration().toFixed(2)
          : 100;
        const elapsed = playerRef.current.getCurrentTime()
          ? playerRef.current.getCurrentTime().toFixed(2)
          : 0;
        setProgress((Number(elapsed) / Number(total)) * 100);
      }, 7);
    }
    return () => clearInterval(timer);
  }, [videoId, playerReady]);    

  useEffect(() => {
    playerRef.current && playerReady
      ? playerRef.current.loadVideoById(videoId)
      : null;
  }, [videoId]);

    return { playerRef, containerRef, playerReady}
}

