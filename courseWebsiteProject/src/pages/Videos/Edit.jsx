import { Save, SaveAltOutlined } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useLoaderData } from 'react-router'

const EditVideo = () => {

    const video = useLoaderData();
    const [title,setTitle] = useState(video.title);
    const [url,setUrl] = useState(video.youtubeUrl);

    return (
    <>
    <TextField value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <TextField value={url} onChange={(e)=>setUrl(e.target.value)}/>
    <Button><Save/></Button>
    </>
  )
}

export default EditVideo

export const loader = async ({params})=>{
    const {id} = params;
    const {data} = await axios.get(`http://localhost:3000/videos/${id}`);
    return data
}