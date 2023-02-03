
import { Link } from "react-router-dom"
import { Card,CardMedia,CardContent,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoChannelTitle,demoChannelUrl,demoVideoUrl,demoVideoTitle,demoProfilePicture,
  demoThumbnailUrl } from "../utils/constants"


const VideoCard = ({video:{id:{videoId},snippet}})=>{
    return(
      <Card  sx={{width:{md:'320px',xs:'100%'},borderRadius:5}}>
        <Link to={videoId ?`/video/${videoId}`:`/video/${demoVideoUrl}`}>
           <CardMedia image={snippet?.thumbnails?.high?.url}
           alt={snippet?.titie} 
           sx={{width:{xs:'100%',md:'320px'},height:{xs:'180px',md:'180px'}}}/>  
        </Link>
         <CardContent sx={{background:'#000',height:106}}>
        <Link to={videoId ?`/video/${videoId}`:`/video/${demoVideoUrl}`}>
           <Typography variant="subtitle1" fontWeight="bold" color="#fff" >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
           </Typography>
        </Link>
        <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}`:`/channel/${demoChannelUrl}`}>
           <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
           </Typography>
        </Link>
         </CardContent>
      </Card>
    )
}

export default VideoCard