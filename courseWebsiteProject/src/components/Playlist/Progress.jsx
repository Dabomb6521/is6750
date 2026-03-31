import { useContext } from "react";
import { VideosContext } from "../../store/VideosContext";




const Progress = () => {
      const {watchPercent } = useContext(VideosContext);

    
  return (
         <progress value={watchPercent} max={100}/>
  )
}

export default Progress
