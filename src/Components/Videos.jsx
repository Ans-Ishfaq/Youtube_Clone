import React from 'react'
import {Stack,Box} from '@mui/material'
import { categories } from '../utils/constants'
import {VideoCard,ChannelCard} from '../Components'

const Videos = ({videos}) => {
  console.log(videos)

  return (
    <Stack direction="row" justifyContent="start" gap={2} color="white">
      {videos.map((item,idx)=>{
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}

        </Box>
      })}
      
    </Stack>
  )
}

export default Videos
