import { Box,Typography,CardMedia,CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'
import React from 'react'

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
      <Box sx={{
          boxShadow:'none',
          display:'flex',
          borderRadius:'20px',
          justifyContent:'center',
          alignItems:'center',
          width:{md:'320px',sm:'358px'},
          height:'328px',
          margin:'auto',
          marginTop
      }}
      >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent sx={{
            display:'flex',flexDirection:'column',
            justifyContent:'center',textAlign:'center',
            color:'#fff'
          }}>
             <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{
                  borderRadius:'50%',height:'180px',width:'180px',mb:2,
                  border:'1px solid #e3e3e3'
                }}
             />
             <Typography variant='h6'>
                  {channelDetail?.snippet?.title}{' '}
                  <CheckCircle sx={{fontSize:'14px',color:'gray',ml:'5px'}}/>
             </Typography>
          </CardContent>
      </Link>
      </Box>
  )
}

export default ChannelCard