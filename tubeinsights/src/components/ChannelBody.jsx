// Desc: This file contains the ChannelBody component which is used to display the barplots of views, comments and likes of the channel. It takes the plotData as props and renders the barplots using the Barplot component. 
import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Barplot from './Barplot';


function ChannelBody(props) {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
                <Paper elevation={3} sx={{ margin: '20px', textAlign: 'center' }}>
                    <Barplot
                        plotData={props.plotData}
                        XAxisDataKey="name"
                        YAxisDataKey="views"
                    />
                </Paper>
                <Paper elevation={3} sx={{ margin: '20px', textAlign: 'center' }}>
                    <Barplot
                        plotData={props.plotData}
                        XAxisDataKey="name"
                        YAxisDataKey="comments"
                    />
                </Paper>
                <Paper elevation={3} sx={{ margin: '20px', textAlign: 'center' }}>
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