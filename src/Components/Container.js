import React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx({Img, boxValue}) {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Box
      sx={{
        width: 150,
        height: 150,
        backgroundColor: 'black',
        color:'#fff',
        fontSize:10,
        borderRadius: 10,
        // transform:'rotate(45deg)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'sans-serif',
        letterSpacing:'4px',
        wordSpacing:'6px',
        '&:hover': {
          cursor:'pointer',
        },
      }}
    >
      <Img style={{fontSize:"3rem",

    }}/>
    </Box>
    <h1 style={{color:'#202020', fontFamily:'monospace' }}>
      {boxValue}
    </h1>
    </div>
  );
}