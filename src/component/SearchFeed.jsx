import { Stack,Box } from "@mui/material";
import {Video,SideBar} from './'
import{useEffect,useState} from 'react'
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = ()=>{
    const [videos,setVideos] = useState([])
    const {searchTerm} = useParams();
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
      setLoading(true)
      fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data)=>setVideos(data.items))
      setLoading(false)
    },[searchTerm])


    return(
      <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
       {/* <Box sx={{height:{sx:'auto',md:'90vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <SideBar selectedCategory={searchTerm} setCategory={searchTerm}/>
       </Box> */}
       <Box p={2} sx={{heigth:'90vh',flex:2,ml:{md:13}}}>
        <h2>
            <span style={{color:'#F31503'}}>Search Result For :</span>
            <span style={{color:'white'}}>{loading && 'loading....'} {!loading && searchTerm}</span>
        </h2>
        <Video videos={videos}/>
       </Box>
      </Stack>
    )
}

export default SearchFeed