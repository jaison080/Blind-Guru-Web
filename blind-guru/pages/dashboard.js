import Footer from "@components/Footer"
import Head from "next/head"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


function dashboard()
{
     const theme = useTheme();
    return(
        <div className="container">
        <Head>
        <title>Blind Guru | Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
         </Head>
      <main>
          < div className="landing">
            <div className="heading">Dashboard</div>
            <Card sx={{ display: 'flex' ,marginTop:'40px',background:'#0B8B8B'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" className='player'>
            Twitter Feeds
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" sx={{color:'#fff'}}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38  ,color:'#fff'}} />
          </IconButton>
          <IconButton aria-label="next"  sx={{color:'#fff'}}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
    </Card>
            </div>
      </main>
      <Footer/>
    </div>
    )
}
export default dashboard