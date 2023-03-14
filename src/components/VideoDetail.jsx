import { useState,useEffect } from 'react'
import {useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box,Stack } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import React from 'react'

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState('');
  const {id}=useParams();
  useEffect(()=>{
    fetchFromAPI('videos?part=snippet,statistics&id=${id}',[id])
    .then((data)=>{setVideoDetail(data.items[0])})
  })
  return (
    <Box minHeight='95vh'>
       <Stack direction={{xs:'column',md:'row'}}>
            <Box flex={1}>
                 <Box sx={{width:'100%',height:'200px',position:'sticky',top:'86px'}}>
                   <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                   className='react-player' controls/>
                 </Box>   
            </Box>
       </Stack>
    </Box>
  )
}

export default VideoDetail