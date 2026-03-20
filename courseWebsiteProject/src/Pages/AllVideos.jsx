import { Link, useLoaderData } from "react-router"

const AllVideos = () => {
  const videos = useLoaderData();
  
  return (
    <>
    <h1>View All Videos</h1>
    <ul>
      {videos.map((video) => (
        <li key={video.id}>
          <span>{video.title}</span>
          &nbsp;
          <Link to={`${video.id}`}>View</Link>
          &nbsp;
          <Link to={`edit/${video.id}`}>Edit</Link>
          &nbsp;
          <Link to={`delete/${video.id}`}>Delete</Link>
          
          </li>
      ))}
    </ul>
    
    </>
  )
}

export default AllVideos

export async function loader() {
  const response = await fetch('http://localhost:5001/videos');

  if (!response.ok) {
    return []
  } else {
    return response
  }
}