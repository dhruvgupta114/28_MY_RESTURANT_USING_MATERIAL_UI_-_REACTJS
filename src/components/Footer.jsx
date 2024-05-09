import React from 'react'
import { Box, Typography } from '@mui/material'
import  InstagramIcon  from '@mui/icons-material/Instagram'
import  TwitterIcon  from '@mui/icons-material/Twitter'
import  GithubIcon  from '@mui/icons-material/Github'
import  YouTubeIcon  from '@mui/icons-material/YouTube'

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', bgcolor:'#1a1a19', color: 'white', p:3}} >
        <Box sx={{my:3, '& svg':{
            fontSize:'60px',
            cursor:'pointer',
            marginRight:2
        },
        '& svg:hover':{
            color:'goldenrod',
            transform: 'translateX(5px)',
            transition: 'all 400ms ',
        }}}>
            {/* icons */}
            <InstagramIcon/>
            <TwitterIcon/>
            <GithubIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography variant='h5' sx={{'@media (max-width:600px)': {
            fontSize: '1rem',
        }}}>
            All Rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </>
  )
}

export default Footer
