import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackCard from './cards/TrackCard';

import { useState, useEffect } from 'react';

export default function TopTracks({ accessToken }) {

    const [topTracks, setTopTracks] = useState([]);
    console.log(topTracks);

    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
        redirectUri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI
    });

    useEffect(() => {
        if (!accessToken) {
            return;
        } else {
            spotifyApi.setAccessToken(accessToken);
            spotifyApi.getMyTopTracks().then(data => {
                console.log(data);
                let items = data.body.items;
                items.length = 10;
                console.log(items);
                setTopTracks(items.map(track => {
                    return {
                        id: track.id,
                        artist: track.artists[0].name,
                        title: track.name,
                        albumImageUrl: track.album.images[0].url
                    }
                }));
            }, err => {
                console.log("Something went wrong!", err);
            });
        }
    }, [accessToken]);

    return (
        <div>
            <h1 className="text-white font-sans font-bold flex justify-center pt-5" >Your top 10 tracks of the past 4 months.</h1>
            {topTracks.map(track => (
                <TrackCard
                    key={track.id}
                    artist={track.artist}
                    title={track.title}
                    albumImageUrl={track.albumImageUrl}
                />
            ))}
        </div>
    )

}