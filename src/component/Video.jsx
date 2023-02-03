import {Stack,box} from '@mui/material'
import { Box } from '@mui/system'
import {VideoCard,ChannelCard} from './'


const Video = ({videos,direction})=>{
  return(
      <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((video,ind)=> (
          <Box key={ind}>
            {video.id.videoId && <VideoCard video={video}/>}
            {video.id.channelId && <ChannelCard channel={video}/>}
          </Box>
        ))}
      </Stack>
    )
}

export default Video