import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';
import TrackCard from './cards/TrackCard';

export default function TopTracks({ accessToken }) {
    const [topTracks, setTopTracks] = useState([]);
    console.log(topTracks);

    const spotifyApi = new SpotifyWebApi({
        clientId: "f1873ac026914cb6831c47fc00432b3e",
        clientSecret: "d48679c7e5b54de09d997515538f7913",
        redirectUri: "http://localhost:3000"
    });

    useEffect(() => {
        if (!accessToken) {
            return;
        } else {
            spotifyApi.setAccessToken(accessToken);
            spotifyApi.getMyTopTracks().then(data => {
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
            <h1>Top Tracks</h1>
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