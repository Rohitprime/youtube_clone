import { useState,useEffect } from "react"
import {Link,useParams} from 'react-router-dom'
import ReactPlayer from "react-player"
import { Box,Stack, Typography } from "@mui/material"
import { CheckCircle,ThumbUp } from "@mui/icons-material"
import { fetchFromApi } from "../utils/fetchFromApi"
import Video from "./Video"

const VideoDetail = ()=>{
  const {id} = useParams();
  const [video,setVideo] = useState(null)
  const [relatedVideos,setRelatedVideo] = useState([])
  
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{setVideo(data.items[0])})
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>{setRelatedVideo(data.items)})
  },[id])
  


  return(
    <Box minHeight='92vh'>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1} ml={{md:'3',xs:0}}>
          <Box sx={{width:{md:'74%', xs:'100%'},top:'86',position:{md:'fixed'}}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
            <Typography color='white' mx={5} mt={2} variant='h6' fontWeight='bold'>
              {video?.snippet?.title}
            </Typography>
            <Stack direction={{md:'row',xs:'column'}} justifyContent='space-between' mx={4} mt={2} color='gray'>
               <Link to={`/channel/${video?.snippet?.channelId}`}>
                  <Typography color='white'>
                      {video?.snippet?.channelTitle}
                      <CheckCircle sx={{fontSize:12,color:'',ml:'5px'}}/>
                  </Typography>
               </Link>
               <Stack direction='row' gap={{md:'20px',xs:'10px'}}>
                   <Typography color='white'>
                   <ThumbUp sx={{mx:'0px',mb:'-5px'}}/>
                      {parseInt(video?.statistics?.likeCount).toLocaleString()}
                   </Typography>
                   <button>
                   <Typography color=''>
                    {parseInt(video?.statistics?.viewCount).toLocaleString() + '    views'}
                   </Typography>
                   </button>
               </Stack>
            </Stack>
          </Box>
        </Box>
        <Box mx={5}>
            <Typography color='whitesmoke' variant="h5" my={3}>All Related Videos</Typography>
           <Video videos={relatedVideos} direction={'column'}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail