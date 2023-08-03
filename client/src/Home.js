import React from 'react';
import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import TopTracks from './pages/TopTracks';
import TopArtists from './pages/TopArtists';

import { useEffect } from 'react';

export default function Home({ code }) {

    const accessToken = useAuth(code);

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
        }
    }, [accessToken]);

    return (
        <div className="bg-spotify-background h-max">
            <TopTracks accessToken={accessToken} />
            <TopArtists accessToken={accessToken} />
        </div>
    )
}