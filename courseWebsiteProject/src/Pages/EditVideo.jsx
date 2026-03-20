import { useLoaderData } from "react-router"
import { useState } from "react";

const EditVideo = () => {
  const video = useLoaderData();
  const [title, setTitle] = useState(video.title);
  const [url, setUrl] = useState(video.youtubeUrl);

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      <button>Save</button>
    </>
  )
}

export default EditVideo

export async function loader({params}) {
  const response = await fetch(`http://localhost:5001/videos/${params.id}`);

  if (!response.ok) {
    return []
  } else {
    return response
  }
}