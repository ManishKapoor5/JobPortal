import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { AppBar, Box, Button, Card, Grid, Paper, Stack, Typography, createTheme } from '@mui/material';
import { FaBell } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';

const Header = () => {
  return (
    <Box sx={{color: '#E9ECF3'}}>
      
      <AppBar sx={{backgroundColor: '#FFFFFF', boxShadow: '1'}}>
        <Toolbar>
            <Stack sx={{display:'flex', flexDirection: 'row', columnGap: 11}}>
            
            <Typography color={'#000000'} marginTop={1}>Predamelan</Typography>
            <Button sx={{textTransform: 'none', color: "#CB6015", height: 41, width: 121, boxShadow: "#D76B00", borderRadius: 10,padding: 1.3,background:'#f7ede3'}}>Find work</Button>
            <Button sx={{textTransform: 'none', color: "#000000"}}>Message</Button>
            <Button sx={{textTransform: 'none', color: "#000000"}}>My Profile</Button>
            <Button sx={{textTransform: 'none', color: "#000000"}}>Overview</Button>
            <Button><FaBell fontSize={21} fill='#000000'/></Button>
            <Box marginLeft={-14.6} border={'3px solid #FFFFFF'} marginTop={0.5}><BsCircleFill fontSize={7} fill='#CB6015'/></Box>
            <Box sx={{marginTop: 1.5}}><RxAvatar fontSize='21' color='#000000' fill='#000000'/></Box>
            <Box paddingTop={1} margin={0} marginLeft={-7}>
              <Typography color={'#000000'} fontSize={11}>Andre Salmanan</Typography>
              <Typography color={'grey'} fontSize={11}>Andresalmanan@gmail.com</Typography>
            </Box>
            
            </Stack>
        </Toolbar>
        </AppBar>
        
        
    </Box>
  )
}

export default Header; 