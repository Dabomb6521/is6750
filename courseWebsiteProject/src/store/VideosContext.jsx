import { createContext, useState, useEffect } from "react";

// Create context
export const VideosContext = createContext({
    videos: [],
    currentVideo: null,
    setCurrentVideo: () => { },
    playBackSpeed: 1,
    setPlayBackSpeed: () => { },
    currentTimeStamp: 0,
    setCurrentTimeStamp: () => { },
    loading: false,
    error: null,
    watchPercent: 0,
    setWatchPercent: () => { }
});



export const VideosProvider = ({ children }) => {
    // Subscribe to our backend
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/videos`);
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    // Track the current video
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Track the current playback speed
    const [playBackSpeed, setPlayBackSpeed] = useState(1);

    // Track the current video timestamp
    const [currentTimeStamp, setCurrentTimeStamp] = useState(0);

    // Track the current watch percentage
    const [watchPercent, setWatchPercent] = useState(0);

    // Subscribe to the YouTube API
    useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }, []);

    return (
        <VideosContext value={{ setWatchPercent, watchPercent, videos, currentVideoIndex, setCurrentVideoIndex, playBackSpeed, setPlayBackSpeed, currentTimeStamp, setCurrentTimeStamp, loading, error }}>
            {loading ? <p>Loading...</p> : error ? <p>Error: {error.message}</p> : children}
        </VideosContext>
    )
}