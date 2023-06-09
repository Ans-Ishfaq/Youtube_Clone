import React from 'react'
import {Card,CardContent,CardMedia,Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoUrl,demoChannelUrl,demoVideoTitle,demoChannelTitle } from '../utils/constants'

const VideoCard = ({video:{id:{videoId}},snippet}) => {
  return (
    <Card sx={{width:{md:'320px', xs:'100%'}, boxShadow:'none', borderRadiu:0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnail?.high?.url}
        alt={snippet?.title}
        sx={{width:358, height:180}}
        >
        </CardMedia>
      </Link> 
      <CardContent sx={{backgroundColor:"#1e1e1e", height:'106px'}}> 
        <Link to={ videoId ? `/video/${videoId}` :demoVideoUrl }>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
          {snippet?.title.slice(0,50) || demoVideoTitle.slice(0.50)}
          </Typography>
        </Link>
        <Link to={ snippet?.ChannelId ? `/channel/${snippet?.channelId}` :demoChannelUrl }>
          <Typography variant="subtitle2" fontWeight="bold" color="gray" >
          {snippet?.Channeltitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize:12 ,color:'gray', ml:'5px'}} />
          </Typography>
        </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard 
