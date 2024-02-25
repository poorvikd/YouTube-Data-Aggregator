import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Barplot from './Barplot';


function ChannelBody(props){
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Paper elevation={3} sx={{ margin:'20px', textAlign: 'center' }}>
                    <Barplot 
                        plotData={props.plotData} 
                        XAxisDataKey="name"
                        YAxisDataKey="views"   
                    />
                </Paper>
                <Paper elevation={3} sx={{  margin:'20px', textAlign: 'center' }}>
                    <Barplot 
                        plotData={props.plotData}  
                        XAxisDataKey="name"
                        YAxisDataKey="comments"
                    />
                </Paper>
                <Paper elevation={3} sx={{  margin:'20px', textAlign: 'center' }}>
                    <Barplot 
                        plotData={props.plotData}  
                        XAxisDataKey="name"
                        YAxisDataKey="likes"
                    />
                </Paper>
            </Box>
        </>
    );
}

export default ChannelBody;