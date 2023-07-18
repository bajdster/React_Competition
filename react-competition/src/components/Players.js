import React from 'react'
import { Stack } from '@mui/system'
import Item from '@mui/material/Stack';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const Players = (props) => {

    const itemStyles = {
        backgroundColor:"#3281a8",
        color: "#FFFFFF", 
        // textAlign:"center",
        height: "50px",
        width:"70%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        boxShadow: "1px 1px 6px 0px black",
        position:"relative"
    }

    const stackStyles = {
        // border: '1px solid black', 
        width: "40%", 
        padding: "10px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    
    const handleClick = () =>
    {
        console.log("Yeah")
    }

  return (

      <Stack spacing={2} sx={stackStyles}>
        {props.names.map((name, index)=>
        {
          return <Item key={index} index={index} sx ={itemStyles} onClick={handleClick}>{name} 
        <RemoveCircleIcon sx={{position: "absolute", color:"red", right:"-20px", fontSize:"40px"}}/>
          </Item> 
        })}
        </Stack>
  )
}

export default Players