import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';
import ArtistCard from './cards/ArtistCard';

export default function TopArtists({ accessToken }) {

    const [topArtists, setTopArtists] = useState([]);
    console.log(topArtists);

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
            spotifyApi.getMyTopArtists().then(data => {
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
            <h1>Top Artists</h1>
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