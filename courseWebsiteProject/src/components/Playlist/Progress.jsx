// import { useContext } from "react";
import { VideosContext } from "../../store/VideosContext";
import { useSelector } from "react-redux";

const Progress = () => {
  // const { watchPercent } = useContext(VideosContext);
  const watchPercent = useSelector(state=>state.video.watchPercent)

  return <progress value={watchPercent} max={100} />;
};

export default Progress;
