

import { Link } from "react-router-dom"
import { Box,Card,CardMedia,CardContent,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoChannelTitle,demoChannelUrl,demoVideoUrl,demoVideoTitle,demoProfilePicture,
  demoThumbnailUrl } from "../utils/constants"


const ChannelCard = ({channel:{id:{channelId},snippet,statistics}})=>{
    return(
      <Card  sx={{width:{md:'320px',xs:'100%'},borderRadius:5}}>
         <CardContent sx={{background:'#000',display:'flex',flexDirection:'column',
        justifyContent:'center',textAlign:'center',alignItems:'center'}}>
        <Link to={channelId ?`/channel/${channelId}`:`/channel/${demoVideoUrl}`}>
           <CardMedia image={snippet?.thumbnails?.high?.url}
           alt={snippet?.titie} 
           sx={{width:180,height:180,borderRadius:'50%'}}/>  
        </Link>
        <Link to={channelId ?`/channel/${channelId}`:`/channel/${demoVideoUrl}`}>
           <Typography variant="subtitle1" fontWeight="bold" color="#fff" >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            <CheckCircle sx={{fontSize:12,color:'',ml:'5px'}}/>
           </Typography>
        </Link>
       { statistics && <Typography color='white'>
            {parseInt(statistics?.subscriberCount).toLocaleString()+'     Subscibers'} 
        </Typography>
       } 
         </CardContent>
      </Card>
    )
}

export default ChannelCard