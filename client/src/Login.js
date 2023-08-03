import React from 'react';

const spotifyUrl = "https://accounts.spotify.com/authorize?";
const scopes = "user-top-read";
const responseType = "code";
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const AUTH_URL = `${spotifyUrl}client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scopes}`;

export default function Login() {
    return (
        <div className="bg-spotify-background flex justify-center items-center h-screen">
            <a className="font-sans text-lg font-bold bg-spotify-green hover:bg-green-700 px-7 py-4 rounded-lg text-white transition-all shadow-lg" href={AUTH_URL}>
                Login with Spotify
            </a>
        </div>
    )
}