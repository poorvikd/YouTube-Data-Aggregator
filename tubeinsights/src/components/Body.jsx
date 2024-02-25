
import React, { Component } from 'react';
import { Typography, Container } from '@mui/material'
import SearchBar from './SearchBar';
import ChannelStatBar from './ChannelStatBar';
import ChannelBody from './ChannelBody';
import youtube from '../api/youtube';



function renderResult(props){
    const search = props.search;
    if (search){
        return (
            <>
                <ChannelStatBar 
                    channel_id={props.id}
                    title={props.title}
                    thumbnail={props.thumbnail}
                    viewCount={props.viewCount}
                    subscriberCount={props.subscriberCount}
                    videoCount={props.videoCount}
                />
                <ChannelBody
                    plotData={props.plotData}
                />
            </>
            
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

class Body extends Component {

    state = {
        data: [],
        id: '',
        title: '',
        thumbnail: '',
        viewCount: '',
        subscriberCount: '',
        videoCount: '',
        playlists: [],
        plotData: [],
        search: false
    }
    handleSubmit = async (term) => {
        const response_channel = await youtube.get('/channels', {
            params: {
                forHandle: term,
                part: 'snippet,statistics',
            }
        });
        this.setState({ data: response_channel.data.items });
        this.setState({ id: response_channel.data.items[0].id });
        this.setState({ title: response_channel.data.items[0].snippet.title });
        this.setState({ thumbnail: response_channel.data.items[0].snippet.thumbnails.default.url });
        this.setState({ viewCount: response_channel.data.items[0].statistics.viewCount });
        this.setState({ subscriberCount: response_channel.data.items[0].statistics.subscriberCount });
        this.setState({ videoCount: response_channel.data.items[0].statistics.videoCount });

        var response_playlists = await youtube.get('/playlists', {
            params: {
                channelId: this.state.id,
                part: 'snippet,contentDetails',
                maxResults: 10
            }
        });

        var playlists = response_playlists.data.items;

        var plotData = [];

        for (var i = 0; i < playlists.length; i++){
            var response_playlist = await youtube.get('/playlistItems', {
                params: {
                    playlistId: playlists[i].id,
                    part: 'contentDetails,id',
                    maxResults: 10
                }
            });
            playlists[i].videos = response_playlist.data.items;

            var v=0;
            var l=0;
            var c=0;

            for (var j = 0; j < playlists[i].videos.length; j++){
                var response_video = await youtube.get('/videos', {
                    params: {
                        id: playlists[i].videos[j].contentDetails.videoId,
                        part: 'statistics,contentDetails'
                    }
                });
                playlists[i].videos[j].video = response_video.data.items[0];
                v += parseInt(response_video.data.items[0].statistics.viewCount);
                l += parseInt(response_video.data.items[0].statistics.likeCount);
                c += parseInt(response_video.data.items[0].statistics.commentCount);
            }
            playlists[i].averageViews = v/playlists[i].videos.length;
            playlists[i].averageLikes = l/playlists[i].videos.length;
            playlists[i].averageComments = c/playlists[i].videos.length;

            plotData.push({
                name: playlists[i].snippet.localized.title,
                views: parseInt(response_video.data.items[0].statistics.viewCount),
                likes: parseInt(response_video.data.items[0].statistics.likeCount),
                comments: parseInt(response_video.data.items[0].statistics.commentCount)
            });
        }

        this.setState({ playlists: playlists });
        this.setState({ plotData: plotData });
        this.setState({ search: true });


    }

    render () {
        return (
            <main style={{ height: "100vh"}}>
                <Container>
                    <br></br>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        TUBE INSIGHTS
                    </Typography>
                    <Typography variant="h5" align="center" color="#c20101" paragraph>
                        Streamline Your Insights: Aggregating YouTube Data with Precision and Ease
                    </Typography>
                    <br></br>
                    <SearchBar alignItems="center" placeholder="Enter YouTube username or channel link" searchBarWidth="60%"  handleSubmit={this.handleSubmit}/>
                </Container>

                <br></br>
                <Container>
                    {renderResult(this.state)}
                </Container>
                <br></br>
            </main>
        )
    }
}

export default Body;