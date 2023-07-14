import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import TopTracks from './pages/TopTracks';
import TopArtists from './pages/TopArtists';

export default function Dashboard({ code }) {

    const accessToken = useAuth(code);

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
        }
    }, [accessToken]);

    return (
        <div>
            <h1>Dashboard</h1>
            <TopTracks accessToken={accessToken} />
            <TopArtists accessToken={accessToken} />
        </div>
    )
}

/*
            
*/