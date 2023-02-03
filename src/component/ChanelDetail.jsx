import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi';
import { Box } from '@mui/material';
import {VideoCard,ChannelCard,Video} from './'

const ChanelDetail = ()=>{
  const {id} = useParams();
  const [channelInfo,setChannelInfo] = useState(null)
  const [videos,setvideos] = useState([])

  console.log(channelInfo , videos)

  useEffect(()=>{
      fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data)=>{setChannelInfo(data.items[0])})
   
      fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>{setvideos(data.items)})

  },[id])
  return(
    <Box minHeight='95vh'>
      <div style={{color:'transparent', display:'flex', justifyContent:'center', position:'absolute', width:'100vw',marginTop:'85px'}}>
      {channelInfo && <ChannelCard channel={channelInfo}/>}
      </div >
        <div style={{ background: 'rgb(63,94,251)',
background:'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',height:'300px' }}/>
      <Box mt={15} sx={{marginLeft:{md:15,xs:0}}}>
       <Video videos={videos}/>
      </Box>
       </Box>
  )
}

export default ChanelDetail