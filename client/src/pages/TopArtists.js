import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import ArtistCard from './cards/ArtistCard';

import { useState, useEffect } from 'react';

export default function TopArtists({ accessToken }) {

    const [topArtists, setTopArtists] = useState([]);
    console.log(topArtists);

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
            spotifyApi.getMyTopArtists().then(data => {
                console.log(data);
                let items = data.body.items;
                items.length = 10;
                console.log(items);
                setTopArtists(items.map(artist => {
                    return {
                        id: artist.id,
                        name: artist.name,
                        genre: artist.genres[0],
                        profilePictureUrl: artist.images[0].url
                    }
                }))
            }, err => {
                console.log("Something went wrong!", err);
            });
        }
    }, [accessToken]);

    return (
        <div>
            <h1 className="text-white font-sans font-bold flex justify-center pt-10" >Your top 10 artists of the past 4 months.</h1>
            {topArtists.map(artist => (
                <ArtistCard
                    key={artist.id}
                    name={artist.name}
                    genre={artist.genre}
                    profilePictureUrl={artist.profilePictureUrl}
                />
            ))}
        </div>
    )

}