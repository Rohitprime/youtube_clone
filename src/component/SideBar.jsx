import { Stack } from "@mui/material";
import { categories  } from '../utils/constants'


const SideBar = ({selectedCategory,setCategory})=>{
    return(
        <Stack direction='row' sx={{overFlowY:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
          {categories.map(category => (
            <button 
            onClick={()=>setCategory(category.name)}
            className="category-btn" key={category.name} style={{background: category.name === selectedCategory && '#FC1503',
            color:'white'}
            
            }>
                <span style={{color:category.name === selectedCategory ? 'white':'red',marginRight:15}}>{category.icon}</span>
                <spna>{category.name}</spna>
            </button>
          ))}
        </Stack>
    )
}

export default SideBar