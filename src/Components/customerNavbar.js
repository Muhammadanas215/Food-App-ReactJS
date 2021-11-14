import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { auth, signOut } from "../Configs/firebase"
import { useHistory } from "react-router-dom"


export default function CustomerButtonAppBar({ name, dp }) {

  // const[avatarImg, setAvatarImg] = useState("/broken-image.jpg")





  const History = useHistory()
  let signOutFunction = () => {
    signOut(auth).then(() => {
      History.push('/')
    }).catch((error) => {

      console.log(error.message)
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: 'white' }} position="static">
        <Toolbar sx={{ mx: '30px', textTransform: 'capitalize' }}>
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, color: "black", fontWeight: 500, fontFamily:'sans-serif' }}>
            <Avatar sx={{ marginRight: 2 }} src={dp} />
            <h3>Welcome {name}
            </h3>
          </Typography>
          <Button sx={{ color: 'black' }} onClick={signOutFunction} color="inherit">SignOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}