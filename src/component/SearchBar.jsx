import { IconButton, Paper } from "@mui/material"
import { Search } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = ()=>{

    const [searchTerm ,setSearchTerm] = useState('')
    const navigate = useNavigate();
  
    const onChangeHandler = (event)=>{
     
         setSearchTerm(event.target.value)
    }

    const submithandler = (e)=>{
        e.preventDefault();
         if(searchTerm){
             navigate(`/search/${searchTerm}`)
           setSearchTerm('')
         }
    }

    return(
        <Paper 
        component='form'
        onSubmit={submithandler}
        sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl:2,
            mr:{sm:5}
        }}>
            <input className="search-bar" placeholder="search..." onChange={onChangeHandler} value={searchTerm}/>
            <IconButton type='submit'
            sx={{p:'10px',color:'red'}} >
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar