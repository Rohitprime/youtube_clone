import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Box } from "@mui/material";
import {NavBar,Feed,VideoDetail,SearchFeed,ChanelDetail} from './component'

const App =()=> {
  return(
    <BrowserRouter>
    <Box sx={{background:'#000'}}>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Feed/>}/>
      <Route exact path='/:id' element={<Feed/>}/>
      <Route path='/video/:id' element={<VideoDetail />}/>
      <Route path='/channel/:id' element={<ChanelDetail/>}/>
      <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
    </Routes>
    </Box>
    </BrowserRouter>  
  )
}

export default App;
