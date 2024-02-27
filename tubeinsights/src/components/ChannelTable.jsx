// Desc: This file contains the ChannelTable component which is used to display the table of videos for a chosen playlist of the channel. It takes the channel data as props and renders the table of videos.
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EnhancedTable from '../utils/table'
import { Typography } from '@mui/material';



function ChannelTable(props) {
    const [playlistData, setPlaylistData] = useState([]);
    const [pIndex, setPIndex] = useState(-1);


    const handleChange = async (event) => {

        console.log(event.target.value);
        await setPIndex(event.target.value);
    }

    const generateTableData = async (channelData) => {
        var videos = props.channelData[pIndex].videos;

        var data = [];
        for (let i = 0; i < videos.length; i++) {
            let row = {
                id: i,
                title: videos[i].video.snippet.title,
                viewCount: videos[i].video.statistics.viewCount,
                likeCount: videos[i].video.statistics.likeCount,
                commentCount: videos[i].video.statistics.commentCount
            }
            data.push(row);
        }

        await setPlaylistData(data);

    }


    useEffect(() => {
        console.log("Playlist Data Updated");
    }, [playlistData]);


    useEffect(() => {
        console.log(pIndex);
        if (pIndex !== -1) {
            generateTableData();
        }
        // eslint-disable-next-line
    }, [pIndex]);

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label">Playlist</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        label="Playlist *"
                        onChange={handleChange}
                    >
                        {
                            props.channelData.map((playlist, index) => {
                                return <MenuItem value={index}>{playlist.snippet.title}</MenuItem>
                            })
                        }
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Paper elevation={3} sx={{ margin: '20px', textAlign: 'center' }}>
                    {
                        playlistData.length > 0 ? (
                            <EnhancedTable rows={playlistData} />
                        ) : (
                            <Typography variant="h6" gutterBottom component="div" sx={{ color: "#c20101", padding: '10px' }}>
                                Select a playlist from the dropdown to view the table
                            </Typography>
                        )
                    }
                </Paper>
            </Box>
        </>
    );
}

export default ChannelTable;