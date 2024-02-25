import * as React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ChannelStatBar(props){
    return (
        <Grid container spacing={3} sx={{width:'100'}}>
            <Grid item xs={12}>
                <Card variant="outlined" sx={{ display: 'flex', alignItems: 'center', background: '#c20101'}}>
                    <CardContent>
                        <img src={props.thumbnail} alt={props.title} />
                    </CardContent>
                    <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography variant="h4" color="#ffffff">{props.title}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card variant="outlined" sx={{alignItems: 'center', background: '#c20101'}}>
                    <CardContent sx={{ textAlign: 'center', paddingBottom:'0px'}}>
                        <Typography variant='body' color="#ffffff" ><b>{props.viewCount}</b> Views</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card variant="outlined" sx={{alignItems: 'center', background: '#c20101'}}>
                    <CardContent sx={{ textAlign: 'center', paddingBottom:'0px' }}>
                        <Typography variant='body' color="#ffffff"><b>{props.subscriberCount}</b> Subscribers</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card variant="outlined" sx={{alignItems: 'center', background: '#c20101'}}>
                    <CardContent sx={{ textAlign: 'center', paddingBottom:'0px' }}>
                        <Typography variant='body' color="#ffffff"><b>{props.videoCount}</b> Videos</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ChannelStatBar;