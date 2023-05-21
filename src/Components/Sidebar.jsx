import React from 'react'
import {Stack,Box} from '@mui/material'
import  {categories}  from '../utils/constants'



const Sidebar = ({selectedCategory,setSelectedCategory}) => (
    <Stack 
      direction="row"
      sx={{
        overflow: 'auto',
        flexDirection: {md:'column'},
        height:{sx:'auto', md:'95%'}
      }}
    >
      {categories.map((category=>(
        <button 
        className='category-btn'
        style={{
          background: category.name === selectedCategory && 'FC1503',color:'white'}}
          key={category.name}
          onClick={()=> setSelectedCategory(category.name)}
        >
          <span style={{color:category.name === selectedCategory ? 'white' : 'red', marginRight:'15px'}} >{category.icon}</span>
          <span style={{opacity: category.name === selectedCategory ? 1 : 0.7}} >{category.name}</span>
        </button>
      )))}
    </Stack>
  )


export default Sidebar
