
import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material'
import SearchBar from './SearchBar';
import ChannelStatBar from './ChannelStatBar';
import ChannelBody from './ChannelBody';
import ChannelTable from './ChannelTable';
import youtube from '../api/youtube';
import { TailSpin } from 'react-loader-spinner';
import Box from '@mui/material/Box';
import PaginationComponent from '../utils/pagination';
import Alert from '@mui/material/Alert';



function renderResult(channelData, search, batch, page, pageCount, handlePageChange) {

    if (search === 'Loaded') {
        return (
            <>
                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <PaginationComponent batch={batch} page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
                </Box>

                <ChannelStatBar
                    channel_id={channelData[page - 1].channel.id}
                    title={channelData[page - 1].channel.title}
                    thumbnail={channelData[page - 1].channel.thumbnail}
                    viewCount={channelData[page - 1].channel.viewCount}
                    subscriberCount={channelData[page - 1].channel.subscriberCount}
                    videoCount={channelData[page - 1].channel.videoCount}
                />
                <ChannelBody channelData={channelData[page - 1]} />

                <ChannelTable channelData={channelData[page - 1]} />

            </>

        )
    }
    else if (search === 'Loading') {
        return (
            <>
                <br></br>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#c20101"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </Box>
            </>

        )
    }
    else if (search === 'Error') {
        return (
            <Alert severity="error">No channel found</Alert>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

function Body() {

    const [search, setSearch] = useState('Not Loaded');
    const [batch, setBatch] = useState(false);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [channels, setChannels] = useState('');
    const [channelData, setChannelData] = useState({});

    const handlePageChange = async (event, value) => {
        await setSearch('Loading');
        const newPage = value;
        await setPage(newPage);
    };

    const loadStats = async () => {

        await setSearch('Loading');

        var term = channels[page - 1];

        console.log(term)


        if (channelData[page - 1] !== undefined) {
            console.log('Data already loaded');
            await setSearch('Loaded');
            return;
        }

        var response_channel = await youtube.get('/channels', {
            params: {
                forHandle: term,
                part: 'snippet,statistics',
            }
        });


        if (response_channel.data.pageInfo.totalResults === 0) {
            await setSearch('Error');
            return;
        }


        var response_playlists = await youtube.get('/playlists', {
            params: {
                channelId: response_channel.data.items[0].id,
                part: 'snippet,contentDetails',
                maxResults: 10
            }
        });

        if (response_playlists.data.pageInfo.totalResults === 0) {
            await setSearch('Error');
            return;
        }
        var playlists = response_playlists.data.items;

        var plotData = [];

        for (var i = 0; i < playlists.length; i++) {
            var response_playlist = await youtube.get('/playlistItems', {
                params: {
                    playlistId: playlists[i].id,
                    part: 'contentDetails,id',
                    maxResults: 10
                }
            });
            playlists[i].videos = response_playlist.data.items;

            var v = 0;
            var l = 0;
            var c = 0;

            for (var j = 0; j < playlists[i].videos.length; j++) {
                var response_video = await youtube.get('/videos', {
                    params: {
                        id: playlists[i].videos[j].contentDetails.videoId,
                        part: 'statistics,contentDetails,snippet'
                    }
                });
                playlists[i].videos[j].video = response_video.data.items[0];
                v += parseInt(response_video.data.items[0].statistics.viewCount);
                l += parseInt(response_video.data.items[0].statistics.likeCount);
                c += parseInt(response_video.data.items[0].statistics.commentCount);
            }
            playlists[i].averageViews = v / playlists[i].videos.length;
            playlists[i].averageLikes = l / playlists[i].videos.length;
            playlists[i].averageComments = c / playlists[i].videos.length;

            plotData.push({
                name: playlists[i].snippet.localized.title,
                views: parseInt(response_video.data.items[0].statistics.viewCount),
                likes: parseInt(response_video.data.items[0].statistics.likeCount),
                comments: parseInt(response_video.data.items[0].statistics.commentCount)
            });
        };

        channelData[page - 1] = playlists;
        channelData[page - 1].plotData = plotData;
        channelData[page - 1].channel = {};
        channelData[page - 1].channel.id = response_channel.data.items[0].id;
        channelData[page - 1].channel.title = response_channel.data.items[0].snippet.title;
        channelData[page - 1].channel.thumbnail = response_channel.data.items[0].snippet.thumbnails.default.url;
        channelData[page - 1].channel.viewCount = response_channel.data.items[0].statistics.viewCount;
        channelData[page - 1].channel.subscriberCount = response_channel.data.items[0].statistics.subscriberCount;
        channelData[page - 1].channel.videoCount = response_channel.data.items[0].statistics.videoCount;


        await setChannelData(channelData);

        await setSearch('Loaded');

        console.log(channelData);

    }

    useEffect(() => {
        console.log(page)
        if (channels !== '') {
            loadStats();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [channels, page]);


    const handleSubmit = async (term) => {

        await setSearch('Loading');

        await setChannelData({});
        await setPage(1);

        var channels = term.split(',');

        await setPageCount(channels.length);
        if (channels.length > 1) {
            await setBatch({ batch: true });
        }
        await setChannels(channels);

    }

    return (
        <main style={{ height: "100vh" }}>
            <Container>
                <br></br>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    TUBE INSIGHTS
                </Typography>
                <Typography variant="h5" align="center" color="#c20101" paragraph>
                    Streamline Your Insights: Aggregating YouTube Data with Precision and Ease
                </Typography>
                <br></br>
                <SearchBar alignItems="center" placeholder="Enter YouTube username or channel link" searchBarWidth="60%" handleSubmit={handleSubmit} />
            </Container>

            <br></br>
            <Container maxWidth="false">
                {renderResult(channelData, search, batch, page, pageCount, handlePageChange)}
            </Container>
            <br></br>
        </main>
    )
}

export default Body;