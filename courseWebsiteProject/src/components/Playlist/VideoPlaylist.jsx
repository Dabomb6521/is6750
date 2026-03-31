import { useContext } from "react"
import { VideosContext } from "../../store/VideosContext";


const VideoPLaylist = () => {
    const { videos, setCurrentVideoIndex,currentVideoIndex } = useContext(VideosContext);
    
    return (
        <div>
            {videos.map((video,index) => (
                <div key={video.id} onClick={() => setCurrentVideoIndex(index)} style={index===currentVideoIndex?{fontWeight:"bold"}:{}}>
                    <p>{video.title}</p>
                </div>
            ))}
        </div>
    )
}

export default VideoPLaylist