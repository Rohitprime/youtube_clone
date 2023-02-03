import { Stack,Box, Typography } from "@mui/material";
import {Video,SideBar} from './'
import{useEffect,useState} from 'react'
import { fetchFromApi } from "../utils/fetchFromApi";


const Feed = ()=>{
const [selectedCategory,setSelectedCategory] = useState('New')
const [loading,setLoading] = useState(true)
const [videos,setVideos] = useState([])

    useEffect(()=>{
      setLoading(true)
      fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>setVideos(data.items))
      setLoading(false)
    },[selectedCategory])

    const setCategory = (category)=>{
        setSelectedCategory(category)
    }

    return(
      <Box minHeight='95vh'>
     {loading && <Typography variant="h1" color='white'> Loading ...</Typography>}  
     {!loading && <Stack direction={{md:'row',xs:'column'}}>
          <Box  sx={{height:{sx:'auto',md:'95vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2},overflowY:'scroll'}}
          position='sticky' >
            <SideBar selectedCategory={selectedCategory} setCategory={setCategory}/>
            {/* <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
              Copyright © 2023 Rohit Prime
            </Typography> */}
          </Box>
          <Box p={2} sx={{overflow:'hidden',overflowY:"scroll",height:'95vh'}} width={{md:'90%'}}
          position='sticky'>
            <h2>
                <span style={{color:'white'}}>{selectedCategory}</span>
                <span style={{color:'#F31503'}}> videos</span>
            </h2>
            <Video videos={videos}/>
          </Box>
      </Stack> 
    }
      </Box>
    )
}


export default Feed;